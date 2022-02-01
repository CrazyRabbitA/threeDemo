<template>
  <div class="note">
    <div class="leftSection">
      <div class="avatar">
        <img src="../assets/images/dog2.jpeg" alt="">
      </div>
      <div class="account">{{ userName }}</div>
      <el-button class="button" type="primary" round @click="logout()">退出登录</el-button>
    </div>
    <div class="rightSection">
      <div v-for="(item,index) in noteList" :key="item.noteId" class="noteItem">
        <el-icon color="#e75757" :size="18" class="deleteIcon" @click="deleteItem(item.noteId)">
          <delete/>
        </el-icon>
        <el-icon color="#1e68ff" :size="18" class="editIcon" @click="editItem(item,index)">
          <edit/>
        </el-icon>
        <div class="time">
          <el-icon color="#8d8d8d" :size="16">
            <alarm-clock/>
          </el-icon>
          <span class="text">{{ item.time }}</span>
        </div>
        <div class="title">{{ item.title }}</div>
        <div class="location">
          <el-icon color="#8d8d8d" :size="16">
            <add-location/>
          </el-icon>
          <span class="text">{{ item.location }}</span>
        </div>
      </div>
      <div class="addNewItem" @click="addItem" v-if="noteList.length<18">
        <img src="../assets/images/add.png" alt="">
      </div>
    </div>
  </div>



  <!--  <div class="night"></div>-->
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>

  <el-dialog
      v-model="showAddDialog"
      :title="operateType==='add'?'Add Note':'Edit Note'"
      width="25%"
      destroy-on-close
      center
  >
    <div class="iconRow">
      <el-icon color="#8d8d8d" :size="18">
        <calendar/>
      </el-icon>
      <span>Time</span>
    </div>
    <el-time-picker
        v-model="noteForm.time"
        format="HH:mm:ss"
        value-format="HH:mm:ss"
        placeholder="Select Time"
    >
    </el-time-picker>


    <div class="iconRow">
      <el-icon color="#8d8d8d" :size="18">
        <add-location/>
      </el-icon>
      <span>Location</span>
    </div>
    <el-input class="input" clearable v-model="noteForm.location" placeholder="Please input Location"/>


    <div class="iconRow">
      <el-icon color="#8d8d8d" :size="18">
        <collection/>
      </el-icon>
      <span>Title</span>
    </div>
    <el-input class="input" type="textarea" :rows="4" show-word-limit clearable v-model="noteForm.title"
              placeholder="Please input title"/>
    <div class="buttonWrapper">
      <el-button class="button" type="primary" round @click="submit('register')">Submit</el-button>
    </div>


  </el-dialog>
</template>

<script>
import {AddLocation, Calendar, Collection, Delete, AlarmClock, Edit} from '@element-plus/icons-vue'
import Api from '../api';
import {getNoteList} from "../api/url/note";
import {ElMessage} from "element-plus";


export default {
  name: 'note',
  components: {
    AddLocation,
    Calendar,
    Collection,
    Delete,
    Edit,
    AlarmClock
  },
  data() {
    return {
      userName: '',
      showAddDialog: false,
      noteForm: {
        title: '',
        time: '',
        location: ''
      },
      noteList: [],
      operateType: 'add', // 默认新增  add 新增，edit 编辑
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.go(-1);
    },
    addItem() {
      this.operateType = 'add';
      this.showAddDialog = true;
    },
    finalSubmit() {
      if (this.operateType === 'add') {
        Api.note.addNote(this.noteForm)
            .then(res => {
              ElMessage({
                message: '添加成功',
                type: 'success',
              })
              this.noteForm = {
                title: '',
                time: '',
                location: ''
              }
              this.getNoteList();
            })
            .catch(err => {
              if (error.response.data) {
                ElMessage({
                  message: error.response.data.message,
                  type: 'error',
                })
              }
            })
            .finally(() => {
              this.showAddDialog = false;
            })
      }
      if (this.operateType === 'edit') {
        const data = {noteId: this.currentNoteId, ...this.noteForm}
        Api.note.editNote(data)
            .then(res => {
              ElMessage({
                message: '编辑成功',
                type: 'success',
              })
              this.noteForm = {
                title: '',
                time: '',
                location: ''
              }
              this.getNoteList();
            })
            .catch(err => {
              if (error.response.data) {
                ElMessage({
                  message: error.response.data.message,
                  type: 'error',
                })
              }
            })
            .finally(() => {
              this.showAddDialog = false;
            })
      }
    },
    submit() {
      this.finalSubmit();
    },
    deleteItem(noteId) {
      Api.note.deleteNote({
        noteId
      })
          .then(res => {
            ElMessage({
              message: '删除成功',
              type: 'success',
            })
            this.getNoteList();
          })
          .catch(err => {

          })


    },
    editItem(item, index) {
      this.operateType = 'edit';
      this.currentNoteId = item.noteId;
      this.showAddDialog = true;
      const {title, time, location} = item;
      this.noteForm = {
        title, time, location
      }


    },
    getUserInfo() {
      Api.user.getUserInfo()
          .then(res => {
            this.userName = res.data.user.userName;
          })
          .catch(err => {
            console.log(err)
          })
    },
    getNoteList() {
      Api.note.getNoteList()
          .then(res => {
            this.noteList = res.data.noteList;
          })
          .catch(err => {
            console.log(err)
          })

    }
  },
  mounted() {
    this.getUserInfo();
    this.getNoteList();
  }
}
</script>

<style scoped lang="scss">

.note {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  display: flex;
  font-family: 'Anton', sans-serif;
  justify-content: center;
  align-items: center;

  .leftSection {
    position: absolute;
    left: 20px;
    top: 20px;
    color: #fff;

    .avatar {
      display: inline-block;
      width: 100px;
      height: 100px;
      border-radius: 50%;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    .account {
      font-size: 20px;
      font-weight: 600;
      margin: 15px 0;
    }
  }

  .rightSection {
    position: absolute;
    top: 30px;
    bottom: 20px;
    left: 200px;
    right: 80px;
    border-radius: 20px;
    border: solid 2px #232d77;
    padding: 20px;
    overflow: hidden;

    &:after {
      content: '';
      display: block;
      visibility: hidden;
      clear: both;
    }

    .addNewItem,
    .noteItem {
      float: left;
      position: relative;
      width: 150px;
      height: 200px;
      border-radius: 10px;
      background: rgba(255, 255, 255, .9);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin-left: 30px;
      margin-top: 30px;

      .deleteIcon {
        position: absolute;
        top: 5px;
        right: 5px;
      }

      .editIcon {
        position: absolute;
        top: 5px;
        right: 30px;
      }

      .time {
        position: absolute;
        display: flex;
        align-items: center;
        font-size: 16px;
        top: 5px;
        left: 10px;

        .text {
          margin-left: 5px;
        }
      }

      .title {
        position: absolute;
        text-align: left;
        width: 86%;
        top: 40px;
        font-size: 16px;
        padding: 0 5px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 8;
        overflow: hidden;

      }

      .location {
        position: absolute;
        line-height: 16px;
        left: 5px;
        bottom: 10px;
        width: 100%;
        font-size: 12px;
        display: flex;
        align-items: flex-start;

        .text {
          margin-left: 5px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-break: break-all;
        }
      }

      img {
        width: 70px;
        height: 70px;
      }
    }

    .noteItem {
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
      transition: all .6s;

      &:hover {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        transform: scale(1.25, 1.25);
      }
    }
  }
}

.iconRow {
  display: flex;
  align-items: flex-end;
  margin: 10px 0;

  span {
    margin-left: 5px;
    font-size: 18px;
  }
}

.buttonWrapper {
  margin-top: 15px;
  text-align: right;

}

$shooting-time: 3000ms;

.night {
  position: relative;
  width: 100%;
  height: 100%;
  transform: rotateZ(45deg);
  // animation: sky 200000ms linear infinite;
}

.shooting_star {
  position: absolute;
  left: 50%;
  top: 50%;
  // width: 100px;
  height: 2px;
  background: linear-gradient(-45deg, rgba(95, 145, 255, 1), rgba(0, 0, 255, 0));
  border-radius: 999px;
  filter: drop-shadow(0 0 6px rgba(105, 155, 255, 1));
  animation: tail $shooting-time ease-in-out infinite,
  shooting $shooting-time ease-in-out infinite,
  pause-animation #{$shooting-time * 2} infinite;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: calc(50% - 1px);
    right: 0;
    // width: 30px;
    height: 2px;
    background: linear-gradient(-45deg, rgba(0, 0, 255, 0), rgba(95, 145, 255, 1), rgba(0, 0, 255, 0));
    transform: translateX(50%) rotateZ(45deg);
    border-radius: 100%;
    animation: shining $shooting-time ease-in-out infinite, pause-animation #{$shooting-time * 2} infinite;
  }

  &::after {
    transform: translateX(50%) rotateZ(-45deg);
  }

  @for $i from 1 through 20 {
    &:nth-child(#{$i}) {
      $delay: random(9999) + 0ms;
      top: calc(50% - #{random(400) - 200px});
      left: calc(50% - #{random(300) + 0px});
      animation-delay: $delay;

      &::before,
      &::after {
        animation-delay: $delay;
      }
    }
  }
}

@keyframes tail {
  0% {
    width: 0;
  }

  30% {
    width: 100px;
  }

  100% {
    width: 0;
  }
}

@keyframes shining {
  0% {
    width: 0;
  }

  50% {
    width: 30px;
  }

  100% {
    width: 0;
  }
}

@keyframes shooting {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(300px);
  }
}

@keyframes pause-animation {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  50.1% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

@keyframes sky {
  0% {
    transform: rotate(45deg);
  }

  100% {
    transform: rotate(45 + 360deg);
  }
}


</style>
