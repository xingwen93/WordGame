var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// TypeScript file
var MissonSence = (function (_super) {
    __extends(MissonSence, _super);
    function MissonSence() {
        var _this = _super.call(this) || this;
        _this.skinName = 'resource/eui_skins/MissonSenceSkin.exml';
        _this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.backToMain, _this);
        _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.goToGameSence, _this);
        _this.createMisson();
        return _this;
    }
    MissonSence.getInstance = function () {
        if (this.instance == null) {
            this.instance = new MissonSence();
        }
        return this.instance;
    };
    MissonSence.prototype.backToMain = function () {
        this.parent.addChild(StartSence.getInstance());
        this.parent.removeChild(this);
    };
    MissonSence.prototype.createMisson = function () {
        var row = 15;
        var col = 10;
        var spanx = 720 / col; //行间距
        var spany = 1136 / row; //列间距
        var group = new eui.Group();
        group.width = 720;
        group.height = spany * 400; //总高度
        for (var i = 0; i < 400; i++) {
            var icon = new LevelIcon();
            icon.level = i + 1;
            icon.y = spany * i / 2;
            icon.x = Math.sin(icon.y / 180 * Math.PI) * 200 + group.width / 2;
            icon.y += spany * i / 2;
            icon.y = group.height - icon.y - spany * 2;
            group.addChild(icon);
        }
        //group.cacheAsBitmap = true;
        this.gp_levels.addChild(group);
        this.gp_levels.scrollV = group.height - 1100;
    };
    MissonSence.prototype.goToGameSence = function (e) {
        if (e.target.level) {
            console.log(e.target.level);
        }
    };
    return MissonSence;
}(eui.Component));
__reflect(MissonSence.prototype, "MissonSence");
//# sourceMappingURL=MissonSence.js.map