let res = 0;
    let final_str = "";
    function calc(){
        //alert(0);
        
        res += parseInt(document.getElementById("artifact_in").value) * 5;
        final_str += "5 * " + document.getElementById("artifact_in").value + " ";
        if (document.getElementById("statue_0").checked){
            res += 2;
            final_str += "+ 2 ";
        }

        if (document.getElementById("statue_1").checked){
            res += 5;
            final_str += "+ 5 ";
        }

        if (document.getElementById("statue_2").checked){
            res += 10;
            final_str += "+ 10 ";
        }

        if (document.getElementById("statue_3").checked){
            res += 15;
            final_str += "+ 15 ";
        }

        if (document.getElementById("vitrin_0").checked){
            res += 2;
            final_str += "+ 2 ";
        }

        if (document.getElementById("vitrin_1").checked){
            res += 5;
            final_str += "+ 5 ";
        }

        if (document.getElementById("finish").checked){
            res += 20;
            final_str += "+ 20 ";
        }

        if (parseInt(document.getElementById("fine").value) != 0 && document.getElementById("fine").value != ""){
            res -= parseInt(document.getElementById("fine").value);
            final_str += " - " + document.getElementById("fine").value;
        }
        
        console.log(res);
        let delta = Math.abs(parseInt(document.getElementById("predicted").value)  - res);
        console.log(delta);
        let bonus = 0.3 * res - delta;
        res += bonus
        res = Math.round(res) + 1;
        console.log(res);
        final_str += "+ " + bonus + " + 1";


        document.getElementsByTagName("result")[0].style.display = "block";
        document.getElementsByTagName("result")[0].innerHTML = "Результат: <b style='color: #00dd8a'>" + res + " </b>баллов<br>" + final_str;
    }