// TypeScript file
class MissonSence extends eui.Component
{
    private btn_back:eui.Button;
    private gp_levels:eui.Group;
    private sl_levels:eui.Scroller;
    public constructor()
    {
        super();
        this.skinName = 'resource/eui_skins/MissonSenceSkin.exml'
        this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.backToMain,this)
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.goToGameSence,this)
        this.createMisson();
    }

    private static instance: MissonSence;
    public static getInstance() {
        if(this.instance == null) {
            this.instance = new MissonSence();
        }
        return this.instance;
    }

    private backToMain():void
    {
        this.parent.addChild(StartSence.getInstance());
        this.parent.removeChild(this);
    }

    private createMisson():void
    {
        var row = 15;
        var col = 10;
        var spanx = 720/col;  //行间距
        var spany = 1136/row; //列间距
        var group = new eui.Group();
        var mileStone = LevelDataManager.getInstance().mileStone;
        group.width = 720;
        group.height = spany * 400; //总高度

        for( let i = 0; i < 400; i++)
        {
            var icon = new LevelIcon();
            icon.level = i + 1;
            icon.y = spany * i /2;
            icon.x = Math.sin(icon.y / 180 * Math.PI) * 200 + group.width / 2;
            icon.y += spany * i /2;
            icon.y = group.height - icon.y - spany*2;
            icon.enabled = icon.level < mileStone //小于最大关卡的话按钮为灰色
            group.addChild(icon);
        }
        this.gp_levels.addChild(group);
        this.gp_levels.scrollV = group.height - 1100;
    }

    private goToGameSence(e:egret.TouchEvent):void
    {
        if(e.target.level)
        {
            //如果大于最大关卡了就重新设置最大关卡
            if(e.target.level > LevelDataManager.getInstance().mileStone)
            {
                LevelDataManager.getInstance().mileStone = e.target.level;
            }
        }
    }
} 