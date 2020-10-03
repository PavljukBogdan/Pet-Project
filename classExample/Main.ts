import {Student} from "./Student";


// в окремі блоки виніс для зрічності (в ide зручно згортати опрацьовані блоки і працювати з потрібним) прибрати забув
let nb = new Student("Nellson","Bigetti");
    nb.setBall(5);
    nb.setBall(3);
    nb.setBall(4);
    nb.setBall(3);
    nb.studentBall();
    nb.toString();

let gb = new Student("Gevin","Belson");
    gb.setBall(3);
    gb.setBall(3);
    gb.setBall(4);
    gb.setBall(3);
    gb.setBall(5);

    gb.studentBall();
    gb.toString();
