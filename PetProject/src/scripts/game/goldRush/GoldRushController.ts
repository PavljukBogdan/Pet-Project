import {Scene} from "../../system/Scene";
import {GoldRushSlotView} from "./View/GoldRushSlotView";
import {GoldRushModel} from "./model/GoldRushModel";
import {GoldRushBottomBarView} from "./View/GoldRushBottomBarView";
import * as buffer from "buffer";
import {GoldRushWinPopupView} from "./View/GoldRushWinPopupView";

export class GoldRushController extends Scene {
    private model!: GoldRushModel;
    private slotView!: GoldRushSlotView;
    private bottomBarView!: GoldRushBottomBarView;
    private winPopup!: GoldRushWinPopupView | null;
    private isAutoPlay: boolean = false;
    create() {
        this.model = new GoldRushModel();
        this.slotView = new GoldRushSlotView(this.container, this.model);
        this.bottomBarView = new GoldRushBottomBarView(this.container, this.model);
        this.bottomBarView.setUserCoins(this.model.userCoins);
        this.bottomBarView.setCurrentBet(this.model.bet);
        this.bottomBarView.setSpinButtonEvent(this.startSpin.bind(this));
        this.bottomBarView.setAutoPlayEvent(this.autoPlay.bind(this));
        this.bottomBarView.setMaxBetEvent(this.changeBet.bind(this, this.model.maxBet - this.model.bet))
        this.bottomBarView.increaseCurrentBet(this.changeBet.bind(this, this.model.bet));
        this.bottomBarView.reduceCurrentBet(this.changeBet.bind(this, -this.model.bet));
    }

    private autoPlay(): void {
        this.isAutoPlay = !this.isAutoPlay;
    }

    private startSpin(): void {
        this.bottomBarView.disableAllButtons();
        this.model.generateWinningResult();
        this.updateBalance();

        this.slotView.startMoveRows().then(this.handleGameResult.bind(this))
            .then(()=> {
            if (this.isAutoPlay) {
                this.startSpin();
            } else {
                this.bottomBarView.enableAllButtons();
            }
        });
    }

    private handleGameResult(): Promise<void> {
        let self = this;
        let currentValue: number = this.model.userCoins;
        let coinsReward: number = this.model.coinsReward;
        let newValue: number = currentValue + coinsReward;
        let currentReward: string = this.model.currentReward;
        let hasValidReward: boolean = this.model.coinsWinLineTypes.indexOf(currentReward) !== -1;
        return new Promise(function (resolve): void {
            if (hasValidReward) {
                self.model.userCoins = newValue;
                self.winPopup = new GoldRushWinPopupView(self.container);
                self.winPopup.showPopup(coinsReward, self.model.getRewardTypeText(currentReward)).then(() => {
                    resolve();
                    self.winPopup = null;
                });
                self.bottomBarView.userCoinsUpdate(newValue, currentValue);
            } else if(currentReward === 'freeGames') {
                self.bottomBarView.showFreeGame(Boolean(self.model.freeGame));
                resolve();
            } else {
                resolve();
            }
        });
    }

    private updateBalance(): void {
        if (Boolean(this.model.freeGame)) {
            this.model.incrementFreeGame();
            this.bottomBarView.showFreeGame(Boolean(this.model.freeGame));
        } else {
            this.bottomBarView.showFreeGame(false);
            let currentValue = this.model.userCoins;
            let newValue = currentValue - this.model.bet;
            this.model.userCoins = newValue;
            this.bottomBarView.userCoinsUpdate(newValue, currentValue);
        }
    }

    private changeBet(coins: number) {
        let bet: number = this.model.bet + coins;
        if (!this.model.checkBet(bet)) {
            return;
        }
        this.model.bet = bet;
        this.bottomBarView.setCurrentBet(bet);
    }
}
