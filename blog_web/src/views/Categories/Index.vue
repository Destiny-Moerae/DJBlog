<template>
  <div class="common" :style="{
    background: `url(${homeConfig.categoriesBgImg}) 0px center no-repeat`,
    backgroundSize: 'cover',
  }">
    <Header :light-index="3" background="transparent"></Header>
    <div :class="isPC ? 'content' : 'wap-content'">
      <div class="cols">
        <div class="cols-item" @click="goDetails(1)">
          <div class="container">
            <div class="front" :style="{
              backgroundImage: `url(http://img.nevergiveupt.top/2.png)`,
            }">
              <div class="inner">
                <p>技术</p>
                <span>100</span>
              </div>
            </div>
            <div class="back" :style="{
              backgroundImage: `url(http://img.nevergiveupt.top/2.png)`,
            }">
              <div class="inner">
                <p>技术</p>
                <span>100</span>
              </div>
            </div>
          </div>
        </div>

        <div class="cols-item" @click="goDetails(2)">
          <div class="container">
            <div class="front" :style="{
              backgroundImage: `url(http://img.nevergiveupt.top/3.png)`,
            }">
              <div class="inner">
                <p>生活</p>
                <span>100</span>
              </div>
            </div>
            <div class="back" :style="{
              backgroundImage: `url(http://img.nevergiveupt.top/3.png)`,
            }">
              <div class="inner">
                <p>生活</p>
                <span>100</span>
              </div>
            </div>
          </div>
        </div>

        <div class="cols-item" @click="goDetails(3)">
          <div class="container">
            <div class="front" :style="{
              backgroundImage: `url(http://img.nevergiveupt.top/4.png)`,
            }">
              <div class="inner">
                <p>照片</p>
                <span>100</span>
              </div>
            </div>
            <div class="back" :style="{
              backgroundImage: `url(http://img.nevergiveupt.top/4.png)`,
            }">
              <div class="inner">
                <p>照片</p>
                <span>100</span>
              </div>
            </div>
          </div>
        </div>

        <div class="cols-item" @click="goDetails(4)">
          <div class="container">
            <div class="front" :style="{
              backgroundImage: `url(http://img.nevergiveupt.top/5.png)`,
            }">
              <div class="inner">
                <p>其他</p>
                <span>100</span>
              </div>
            </div>
            <div class="back" :style="{
              backgroundImage: `url(http://img.nevergiveupt.top/5.png)`,
            }">
              <div class="inner">
                <p>其他</p>
                <span>100</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header"
import { mapState } from 'vuex'
export default {
  name: "categories",
  components: {
    Header,
  },
  data () {
    return {
      categories: [],
      categoriesBgImg: "http://nevergiveupt.top/category.jpg",
    }
  },
  computed: {
    ...mapState('app', ['homeConfig']),
  },
  mounted () { },
  methods: {

    goDetails (id) {
      let str = ''
      switch (id) {
        case 1:
          str = '技术'
          break
        case 2:
          str = '生活'
          break
        case 3:
          str = '照片'
          break
        case 4:
          str = '其它'
          break
      }
      this.$router.push({
        name: 'categoriesDetails',
        query: {
          name: str
        }
      })
    }
  },
}
</script>
<style lang="less" scoped>
.common {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.content {
  padding-top: 64px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.wap-content {
  position: absolute;
  top: 70px;
  bottom: 0;
  overflow: auto;
  width: 100%;
  padding-top: 20px;
}

.cols {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.cols-item {
  width: calc(25% - 32px);
  margin: 16px;
  cursor: pointer;
}

.container {
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-perspective: 1000px;
  perspective: 1000px;
}

.front,
.back {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  -webkit-transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -o-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1),
    -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  text-align: center;
  min-height: 200px;
  height: auto;
  border-radius: 10px;
  color: #fff;
  font-size: 24px;
}

.back {
  background: #cedce7;
  background: -webkit-linear-gradient(45deg, #cedce7 0%, #596a72 100%);
  background: -o-linear-gradient(45deg, #cedce7 0%, #596a72 100%);
  background: linear-gradient(45deg, #cedce7 0%, #596a72 100%);
  background-repeat: no-repeat;
}

.front:after {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  content: "";
  display: block;
  opacity: 0.6;
  background-color: #000;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 10px;
}

.container:hover .front,
.container:hover .back {
  -webkit-transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  -o-transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1),
    -webkit-transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
}

.back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-size: 100% 100%;
}

.inner {
  -webkit-transform: translateY(-50%) translateZ(60px) scale(0.94);
  transform: translateY(-50%) translateZ(60px) scale(0.94);
  top: 50%;
  position: absolute;
  left: 0;
  width: 100%;
  padding: 32px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 1px solid transparent;
  -webkit-perspective: inherit;
  perspective: inherit;
  z-index: 2;
}

.container .back {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.container .front {
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.container:hover .back {
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.container:hover .front {
  -webkit-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.front .inner p {
  font-size: 32px;
  margin-bottom: 32px;
  position: relative;
}

.front .inner p:after {
  content: "";
  width: 64px;
  height: 2px;
  position: absolute;
  background: #c6d4df;
  display: block;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: -12px;
}

.front .inner span {
  color: rgba(255, 255, 255, 0.7);
  font-family: "Montserrat";
  font-weight: 300;
}

@media screen and (max-width: 664px) {
  .cols-item {
    width: calc(33.333333% - 32px);
  }
}

@media screen and (max-width: 768px) {
  .cols-item {
    width: calc(50% - 32px);
  }
}

@media screen and (max-width: 512px) {
  .cols-item {
    width: 80%;
    margin: 0 0 32px 0;
  }
}
</style>