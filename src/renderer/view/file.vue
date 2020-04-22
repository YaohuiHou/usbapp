<template>
  <div class="file-view">
    <header id="toolBar">
      <section class="navBtnContainer">
        <button class="btn" id="backward" disabled @click="linkonBtnBack">
          <img src="~@/assets/backward.png" alt />
        </button>
        <button class="btn" id="home" @click="linkon">
          <img src="~@/assets/home.png" alt />
        </button>
        <section id="current-folder"></section>
        <button class="btn forward" id="back_up" @click="goto" title="备份">
          <img src="~@/assets/back.png" alt />
        </button>
        <button class="navBtn" id="forward" disabled @click="linkonBtn">
          <img src="~@/assets/forward.png" alt />
        </button>
      </section>
      <input type="search" id="search" results="3" placeholder="Search" />
    </header>
    <!-- 显示文件主区域 -->
    <h2 class="title" v-if="link">备份区</h2>
    <section id="main-area" class="main-area">
      <div v-for="(item,i) in list" :key="i" class="fileItem" @dblclick="gotoFiles(item)">
        <img src="~@/assets/directory.png" alt="" class="fileIcon">
        <div class="fileName">{{item}}</div>
      </div>
    </section>
  </div>
</template>
<script>
const { remote } = require("electron");
const { Menu, MenuItem, Notification } = remote;
import "../assets/css/app.css";
// var adb = require('android');
const fs = require("fs");
const fse = require("fs-extra");
const path = require("path");
const mineType = require("mime-types"); // 文件类型
// const folderPath = "/Users/houyaohui/Desktop/";

// 文件管理
const fileSystem = require("../../main/fileSystem.js");
const userInterface = require("../../main/userInterface.js");
const search = require("../../main/search.js");
let root,
  resultUrl = [];
export default {
  data() {
    return {
      tagIndex: 3,
      imgArr: [],
      videoArr: [],
      tag2: false,
      link: "",
      folderPath:'',
      list:[]
    };
  },
  mounted() {
    this.init()
    console.log(this);
    
  },
  methods: {
    init(){
      let pathArr = ['C','D','F','E','G','/Users/houyaohui/Desktop']
      pathArr.map(item=>{
        userInterface.default.testFile(item+'/',(f)=>{
          if(f){
            this.list.push(item)
          }
        })
      })
    },
    main() {
      // const folderPath1 = 'G:/';
      // const folderPath1 = "/Users/houyaohui/Desktop/"
      userInterface.default.setBtnHandler();
      userInterface.default.loadDirectory(this.folderPath);
      userInterface.default.bindSearchField(event => {
        const query = event.target.value;

        if (query === "") {
          userInterface.default.resetFileter();
        } else {
          search.find(query, userInterface.default.filterResults);
        }
      });
    },
    gotoFiles(link){
      this.folderPath = link
      userInterface.default.updateFolderPath(link)
      this.main()
      userInterface.default.dblclickFun(link)
    },
    goto() {
      const folderPath1 = fileSystem.getUserHomeFolder();
      this.link = "C:/tmp" + folderPath1;
      // let link = "/Users/houyaohui/tmp/Users/houyaohui";
      userInterface.default.setBtnHandler(1);
      userInterface.default.loadDirectory(this.link);
    },
    linkon() {
      userInterface.default.clearView()
      this.link = "";
      this.folderPath = ""
      this.init()
    },
    linkonBtnBack(){
      userInterface.default.btnBack(()=>{
        this.init()
      })
    },
    linkonBtn() {
      let link = document.getElementById("current-folder").innerText;
      if (link.indexOf("/tmp/") < 0) {
        this.linkon();
      }
    },
    showHint(title, body) {
      let myNotification = new Notification({
        title: title,
        body: body
      });

      myNotification.show();
    },
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
}
ul,
ol,
li {
  list-style: none;
}
img {
  vertical-align: top;
}
.file-view {
  padding-top: 3.3rem;
  overflow: auto;
}
.title {
  margin-top: 30px;
  line-height: 50px;
  font-size: 30px;
  color: #333;
  text-align: center;
  font-weight: bold;
}
</style>
