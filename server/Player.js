var Player = function(id, name, spriteIdx) {
    var x = 0,
        y = 0,
        id = id,
        name = name, 
        dancing = false,
        animation = "stand",
        direction = "right",
        isSpy = false, 
        spriteIndex = spriteIdx, 
        marks = [],
        markedPlayer = "";

  

  
    return {
       
        id: id,
        name: name,
        x: x, 
        y: y, 
        dancing: dancing,
        animation: animation,
        direction: direction,
        spriteIndex : spriteIndex, 
        marks : marks
    }
};

exports.Player = Player;
