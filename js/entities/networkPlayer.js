/**
 * Player Entity
 */
game.NetworkPlayer = me.Entity.extend({

    /**
     * constructor
     */
    init: function (x, y, settings) {
        // call the constructor
        this._super(me.Entity, "init", [x, y, {width: 40, height: 190}]);

       
       
        // ensure the player is updated even when outside of the viewport
        this.alwaysUpdate = true;

        this.dancing = false;
        this.stand = true;

        this.body.collisionType = me.collision.types.NO_OBJECT;

    },


    /**
     * update the entity
     */
    update: function (dt) {
        var isStanding = true;
        if (me.input.isKeyPressed("left")) {
            global.network.socket.emit("move", "left");
            isStanding = false;
        }

        if (me.input.isKeyPressed("right")) {
            global.network.socket.emit("move", "right");
            isStanding = false;
        }

        if (me.input.isKeyPressed("up")) {
            global.network.socket.emit("move", "up");
            isStanding = false;
        }

        if (me.input.isKeyPressed("down")) {
            global.network.socket.emit("move", "down");
            isStanding = false;
        }

        if (me.input.isKeyPressed("dance")) {
            if (!this.dancing) {
                this.dancing = true;
                global.network.socket.emit("dance", true);
            }
            isStanding = false;
        } else {
            if (this.dancing) {
                this.dancing = false;
                global.network.socket.emit("dance", false);
            }
        }

        if (me.input.isKeyPressed("mark")) {
            game.data.localPlayer.refreshCollision();
            /*//var player = findPlayerInCollision
            var player = null;
            global.network.socket.emit("mark",player);*/
        }

        if(this.stand != isStanding) {
            this.stand = isStanding;
            global.network.socket.emit("stand", isStanding);
        }
    },

    /**
     * colision handler
     * (called when colliding with other objects)
     */
    onCollision: function (response, other) {
        // Make all other objects solid
        return true;
    }
});
