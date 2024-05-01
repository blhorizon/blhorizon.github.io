// 存数据
// name：命名 data：数据
function saveData(name, data) {
    localStorage.setItem(name, JSON.stringify({ 'time': Date.now(), 'data': data }))
}

// 取数据
// name：命名 time：过期时长,单位分钟,如传入30,即加载数据时如果超出30分钟返回0,否则返回数据
function loadData(name, time) {
    let d = JSON.parse(localStorage.getItem(name));
    // 过期或有错误返回 0 否则返回数据
    if (d) {
        let t = Date.now() - d.time
        if (t < (time * 60 * 1000) && t > -1) return d.data;
    }
    return 0;
}

// 上面两个函数如果你有其他需要存取数据的功能，也可以直接使用

// 读取背景
try {
    let data = loadData('blogbg', 1440)
    if (data) changeBg(data, 1)
    else localStorage.removeItem('blogbg');
} catch (error) { localStorage.removeItem('blogbg'); }

// 切换背景函数
// 此处的flag是为了每次读取时都重新存储一次,导致过期时间不稳定
// 如果flag为0则存储,即设置背景. 为1则不存储,即每次加载自动读取背景.
function changeBg(s, flag) {
    let bg = document.getElementById('web_bg')
    if (s.charAt(0) == '#') {
        bg.style.backgroundColor = s
        bg.style.backgroundImage = 'none'
    } else bg.style.backgroundImage = s
    if (!flag) { saveData('blogbg', s) }
}

// 以下为2.0新增内容

// 创建窗口
var winbox = ''

function createWinbox() {
    let div = document.createElement('div')
    document.body.appendChild(div)
    winbox = WinBox({
        id: 'changeBgBox',
        index: 999,
        title: "切换背景",
        x: "center",
        y: "center",
        minwidth: '300px',
        height: "60%",
        onmaximize: () => { div.innerHTML = `<style>body::-webkit-scrollbar {display: none;}div#changeBgBox {width: 100% !important;}</style>` },
        onrestore: () => { div.innerHTML = '' }
    });
    winResize();
    window.addEventListener('resize', winResize)

    // 每一类我放了一个演示，直接往下复制粘贴 a标签 就可以，需要注意的是 函数里面的链接 冒号前面需要添加反斜杠\进行转义
    winbox.body.innerHTML = `
    <div id="article-container" style="padding:10px;">

    <div class="note info flat"><p>点击对应样式即可切换背景。</p></div>

    <div class="note pink icon-padding flat"><i class="note-icon fa-solid fa-image"></i><p>有效期为一天，到期切回默认壁纸。</p>
    </div>

    <p><button onclick="localStorage.removeItem('blogbg');location.reload();" style="background:#5fcdff;display:block;width:100%;padding: 13px 0;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> 点我恢复默认背景</button></p>

    <div class="bgbox" style="justify-content: space-between;">
        <button onclick="javascript:loadScript('https://cdn.jsdelivr.net/gh/yremp/yremp-js@1.5/sakura.js');" style="background:#fc8cff;display:block;width:32%;padding: 15px 0;border-radius:6px;color:white;"></i> 樱花飘落</button>
        <button onclick="javascript:loadScript('/js/custom/snow.js');" style="background:#3cf4ff;display:block;width:32%;padding: 15px 0;border-radius:6px;color:white;"></i> 雪花飘落</button>
        <button onclick="javascript:loadScript('/js/custom/alf.js');" style="background:#ff6224;display:block;width:32%;padding: 15px 0;border-radius:6px;color:white;"></i> 秋叶飘落</button>
    </div>

    <h2 id="图片（手机）"><a href="#图片（手机）" class="headerlink" title="图片（手机）"></a>图片（手机）</h2>

    <details class="folding-tag"><summary class="toggle-button" style="">查看电脑壁纸</summary>
        <div class="toggle-content">
            <div class="bgbox">
                <a href="javascript:;" rel="noopener external nofollow" class="pimgbox" onclick="changeBg('url(https\://picx.zhimg.com/80/v2-255b4a7cb1c51a795a6878af8eb27a62_1440w.webp)')"><img src="https://picx.zhimg.com/80/v2-255b4a7cb1c51a795a6878af8eb27a62_1440w.webp"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="pimgbox" onclick="changeBg('url(https\://picx.zhimg.com/80/v2-6f3d59e24291dee9e3de14c58b44e4ea_1440w.webp)')"><img src="https://picx.zhimg.com/80/v2-6f3d59e24291dee9e3de14c58b44e4ea_1440w.webp"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="pimgbox" onclick="changeBg('url(https\://pic1.zhimg.com/80/v2-468368eb82fd3f20419c3f1e16add6df_1440w.webp)')"><img src="https://pic1.zhimg.com/80/v2-468368eb82fd3f20419c3f1e16add6df_1440w.webp"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="pimgbox" onclick="changeBg('url(https\://images.wallpaperscraft.com/image/single/piano_silhouette_space_156662_168x300.jpg)')"><img src="https://images.wallpaperscraft.com/image/single/piano_silhouette_space_156662_168x300.jpg"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="pimgbox" onclick="changeBg('url(https\://images.wallpaperscraft.com/image/single/girl_headphones_hood_879800_168x300.jpg)')"><img src="https://images.wallpaperscraft.com/image/single/girl_headphones_hood_879800_168x300.jpg"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="pimgbox" onclick="changeBg('url(https\://bu.dusays.com/2022/08/30/630d6f22c03c6.webp)')"><img src="https://bu.dusays.com/2022/08/30/630d6f22c03c6.webp"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="pimgbox" onclick="changeBg('url(https\://bu.dusays.com/2022/08/30/630d6d56c83eb.webp)')"><img src="https://bu.dusays.com/2022/08/30/630d6d56c83eb.webp"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="pimgbox" onclick="changeBg('url(https\://bu.dusays.com/2022/08/30/630d6d50b439b.webp)')"><img src="https://bu.dusays.com/2022/08/30/630d6d50b439b.webp"></a>
            </div>
        </div>
    </details>

    <h2 id="图片（电脑）"><a href="#图片（电脑）" class="headerlink" title="图片（电脑）"></a>图片（电脑）</h2>
    
    <details class="folding-tag"><summary class="toggle-button" style="">查看电脑壁纸</summary>
        <div class="toggle-content">
            <div class="bgbox">
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://images.wallpaperscraft.com/image/single/girl_twilight_clouds_156445_2560x1080.jpg)')"><img src="https://images.wallpaperscraft.com/image/single/girl_twilight_clouds_156445_2560x1080.jpg"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://images.wallpaperscraft.com/image/single/girl_silhouette_water_476837_2560x1080.jpg)')"><img src="https://images.wallpaperscraft.com/image/single/girl_silhouette_water_476837_2560x1080.jpg"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://images.wallpaperscraft.com/image/single/girl_portal_reflection_654318_2560x1080.jpg)')"><img src="https://images.wallpaperscraft.com/image/single/girl_portal_reflection_654318_2560x1080.jpg"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://bu.dusays.com/2022/08/30/630d6d5159b31.webp)')"><img src="https://bu.dusays.com/2022/08/30/630d6d5159b31.webp"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://bu.dusays.com/2022/08/30/630d718bbeef6.webp)')"><img src="https://bu.dusays.com/2022/08/30/630d718bbeef6.webp"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://bu.dusays.com/2022/08/30/630d72f237d19.jpg)')"><img src="https://bu.dusays.com/2022/08/30/630d72f237d19.jpg"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://bu.dusays.com/2022/08/30/630d72f2032c8.jpg)')"><img src="https://bu.dusays.com/2022/08/30/630d72f2032c8.jpg"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://bu.dusays.com/2021/12/01/7792ff0082ec4.jpg)')"><img src="https://bu.dusays.com/2021/12/01/7792ff0082ec4.jpg"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://bu.dusays.com/2022/08/30/630d72ee6d4f3.png)')"><img src="https://bu.dusays.com/2022/08/30/630d72ee6d4f3.png"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://bu.dusays.com/2022/08/30/630d72ed76532.jpg)')"><img src="https://bu.dusays.com/2022/08/30/630d72ed76532.jpg"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://bu.dusays.com/2022/09/17/6324aea549be6.webp)')"><img src="https://bu.dusays.com/2022/09/17/6324aea549be6.webp"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://bu.dusays.com/2022/09/17/6324aec701a68.webp)')"><img src="https://bu.dusays.com/2022/09/17/6324aec701a68.webp"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://bu.dusays.com/2022/09/17/6324aef4a5543.webp)')"><img src="https://bu.dusays.com/2022/09/17/6324aef4a5543.webp"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://bu.dusays.com/2022/09/17/6324af3622884.webp)')"><img src="https://bu.dusays.com/2022/09/17/6324af3622884.webp"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/5.webp)')"><img src="https://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/5.webp"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/6.webp)')"><img src="https://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/6.webp"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/7.webp)')"><img src="https://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/7.webp"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://bu.dusays.com/2022/12/08/6391b77ed767c.png)')"><img src="https://bu.dusays.com/2022/12/08/6391b77ed767c.png"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/9.webp)')"><img src="https://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/9.webp"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/10.webp)')"><img src="https://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/10.webp"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/11.webp)')"><img src="https://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/11.webp"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/12.webp)')"><img src="https://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/12.webp"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/13.webp)')"><img src="https://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/13.webp"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/14.webp)')"><img src="https://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/14.webp"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/15.webp)')"><img src="https://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/15.webp"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/16.webp)')"><img src="https://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/16.webp"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/17.webp)')"><img src="https://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/17.webp"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/18.webp)')"><img src="https://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/18.webp"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/19.webp)')"><img src="https://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/19.webp"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/20.webp)')"><img src="https://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/20.webp"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/21.webp)')"><img src="https://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/21.webp"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/22.webp)')"><img src="https://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/22.webp"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/23.webp)')"><img src="https://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/23.webp"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/24.webp)')"><img src="https://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/24.webp"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/25.webp)')"><img src="https://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/25.webp"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/26.webp)')"><img src="https://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/26.webp"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/27.webp)')"><img src="https://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/27.webp"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/28.webp)')"><img src="https://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/28.webp"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/29.webp)')"><img src="https://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/29.webp"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="imgbox" onclick="changeBg('url(https\://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/30.webp)')"><img src="https://npm.elemecdn.com/saiodgm-api@1.0.1/randomimg-my/30.webp"></a>
            </div>
        </div>
    </details>

    <h2 id="渐变色"><a href="#渐变色" class="headerlink" title="渐变色"></a>渐变色</h2>

    <details class="folding-tag"><summary class="toggle-button" style="">查看电脑壁纸</summary>
        <div class="toggle-content">
            <div class="bgbox">
                <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #005f58, #00205a)" onclick="changeBg('linear-gradient(to right, #005f58, #00205a)')"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #38ff00, #00dfff)" onclick="changeBg('linear-gradient(to right, #38ff00, #00dfff)')"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="changeBg('linear-gradient(to right, #eecda3, #ef629f)')"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #373B44, #4286f4)" onclick="changeBg('linear-gradient(to right, #373B44, #4286f4)')"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #009FFF, #ec2F4B)" onclick="changeBg('linear-gradient(to right, #009FFF, #ec2F4B)')"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(90deg, #ffd7e4 0%, #c8f1ff 100%)" onclick="changeBg('linear-gradient(90deg, #ffd7e4 0%, #c8f1ff 100%)')"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(45deg, #e5737b, #c6999e, #96b9c2, #00d6e8)" onclick="changeBg('linear-gradient(45deg, #e5737b, #c6999e, #96b9c2, #00d6e8)')"></a>
                <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(90deg,rgba(247,149,51,.1) 0,rgba(243,112,85,.1) 15%,rgba(239,78,123,.1) 30%,rgba(161,102,171,.1) 44%,rgba(80,115,184,.1) 58%,rgba(16,152,173,.1) 72%,rgba(7,179,155,.1) 86%,rgba(109,186,130,.1) 100%)" onclick="changeBg('linear-gradient(90deg,rgba(247,149,51,.1) 0,rgba(243,112,85,.1) 15%,rgba(239,78,123,.1) 30%,rgba(161,102,171,.1) 44%,rgba(80,115,184,.1) 58%,rgba(16,152,173,.1) 72%,rgba(7,179,155,.1) 86%,rgba(109,186,130,.1) 100%)')"></a>
            </div>
        </div>
    </details>



    <h2 id="纯色"><a href="#纯色" class="headerlink" title="纯色"></a>纯色</h2>


    <details class="folding-tag"><summary class="toggle-button" style="">查看电脑壁纸</summary>
    <div class="toggle-content">
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #7D9D9C" onclick="changeBg('#7D9D9C')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #000000ab" onclick="changeBg('#000000ab')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #12c2e9" onclick="changeBg('#12c2e9')"></a> 
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #00aac3" onclick="changeBg('#00aac3')"></a> 
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #D3CBB8" onclick="changeBg('#D3CBB8')"></a> 
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #24C6DC" onclick="changeBg('#24C6DC')"></a> 
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #93F9B9" onclick="changeBg('#93F9B9')"></a> 
    </div>
    </div>
</details>
`;
}

// 适应窗口大小
function winResize() {
    var offsetWid = document.documentElement.clientWidth;
    if (offsetWid <= 768) {
        winbox.resize(offsetWid * 0.95 + "px", "90%").move("center", "center");
    } else {
        winbox.resize(offsetWid * 0.6 + "px", "70%").move("center", "center");
    }
}

// 切换状态，窗口已创建则控制窗口显示和隐藏，没窗口则创建窗口
function toggleWinbox() {
    if (document.querySelector('#changeBgBox')) winbox.toggleClass('hide');
    else createWinbox();
}
// 按钮加载雪花
function loadScript(url) {
    //查找带有“canvas_sakura”ID的<canvas>标记
    var canvas = document.querySelector('canvas#canvas_sakura');
    var script = document.querySelector('script#luoye');
    // Check if the tags exist
    if (canvas != null && script != null) {
        // Remove the tags
        canvas.remove();
        script.remove();
        // The tags do not exist, do something else
        var script = document.createElement("script");
        script.setAttribute('id', 'luoye');
        script.type = "text/javascript";
        script.src = url;
        if (script.readyState) {//IE 
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                }
            };
        }
    } else {
        // The tags do not exist, do something else
        var script = document.createElement("script");
        script.setAttribute('id', 'luoye');
        script.type = "text/javascript";
        script.src = url;
        if (script.readyState) {//IE 
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                }
            };
        }
    }
    document.body.appendChild(script);
}