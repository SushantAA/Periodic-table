alert('table');
let all_element_table = document.getElementById('table');
let table_string = '';
table_string = table_string + '<div id = "period1"><div class="h" >H</div> <div class = "he" >He</div></div>';
for(let j=0;j<8;j++){
    let tx ='';
    for(let i=0;i<18;i++){
        let ttx = '<div class = "table_elements" >'+i.toString()+','+j.toString()+'</div>';
        tx = tx + ttx;
    }
    table_string = table_string + '<div>' + tx +'</div>' ;
}
all_element_table.innerHTML = table_string;