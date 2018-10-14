'use strict';

$(function(){
    $.post('message/getList', getMemoList);

    function getMemoList(data){
        console.log(data);
        for(var i=0 ; i < data.length ; i++){
            $('.table-list').append(
                '<tr><td>' + data[0].unit.userName 
                + '</td></tr><tr><td>' + data.message + '</td></tr>'
            )
        }
    };
});