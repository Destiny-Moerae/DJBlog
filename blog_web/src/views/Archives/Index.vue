<template>
  <div class="common" :style="{
    background: `url(${archiveBgImg}) center center no-repeat`,
    backgroundSize: `cover`
  }">
    <div class="content">
      <Header light-index="2" background="transparent"></Header>
      <!-- 二维数组遍历 -->
      <!-- 时间和归档日期 -->
      <ul class="timeline timeline-centered">
        <li class="timeline-item period">
          <div class="timeline-info"></div>
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <h2 class="timeline-title">2021</h2>
          </div>
        </li>

        <li class="timeline-item">
          <div class="timeline-info">
            <span>08-15</span>
          </div>
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <h3 class="timeline-title">如何学习Vue</h3>
            <p>如何高效学习Vue如何高效学习Vue如何高效学习Vue</p>
          </div>
        </li>

        <li class="timeline-item">
          <div class="timeline-info">
            <span>08-14</span>
          </div>
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <h3 class="timeline-title">如何学习React</h3>
            <p>如何学习React如何学习React如何学习React</p>
          </div>
        </li>
      </ul>

      <ul class="timeline timeline-centered">
        <li class="timeline-item period">
          <div class="timeline-info"></div>
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <h2 class="timeline-title">2020</h2>
          </div>
        </li>

        <li class="timeline-item">
          <div class="timeline-info">
            <span>08-15</span>
          </div>
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <h3 class="timeline-title">如何学习Vue</h3>
            <p>如何高效学习Vue如何高效学习Vue如何高效学习Vue</p>
          </div>
        </li>

        <li class="timeline-item">
          <div class="timeline-info">
            <span>08-14</span>
          </div>
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <h3 class="timeline-title">如何学习React</h3>
            <p>如何学习React如何学习React如何学习React</p>
          </div>
        </li>
      </ul>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'archives',
  components:{
    Header,
    Footer
  },
  data() {
    return {
      archiveBgImg: 'https://bing.ioliu.cn/v1/rand'
    }
  },
}
</script>

<style lang="less" scoped>
.content {
  position: absolute;
  top: 64px;
  bottom: 0;
  overflow: auto;
  width: 100%;
  padding-top: 20px;
}

.timeline {
  line-height: 1.4em;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: inherit;
  }
}

.timeline-item {
  padding-left: 40px;
  position: relative;
  cursor: pointer;

  &:last-child {
    padding-bottom: 0;
  }
}

.timeline-info {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 3px;
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
  white-space: nowrap; // 强制文本文字内容不换行，在对象内一行显示完所有文字内容。
}

.timeline-marker {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 15px;

  &:before {
    background: #00e676;
    border: 3px solid transparent;
    border-radius: 100%;
    content: "";
    display: block;
    height: 15px;
    position: absolute;
    top: 4px;
    left: 0;
    width: 15px;
    transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
  }

  &:after {
    content: "";
    width: 3px;
    background: #ccd5db;
    display: block;
    position: absolute;
    top: 24px;
    bottom: 0;
    left: 6px;
  }

  .timeline-item:last-child &:after {
    content: none;
  }
}

// 鼠标悬停到整个的一日item，hover使其before出来的小圆点中空（除了年份的小圆点）
.timeline-item:not(.period):hover .timeline-marker:before {
  background: transparent;
  border: 3px solid #00e676;
}

.timeline-content {
  padding-bottom: 40px;
  p:last-child {
    margin-bottom: 0;
  }
}
.period {
  padding: 0;
  .timeline-info {
    display: none;
  }
  .timeline-marker {
    &:before {
      background: transparent;
      content: "";
      width: 15px;
      height: auto;
      border: none;
      border-radius: 0;
      top: 0;
      bottom: 30px;
      position: absolute;
      border-top: 3px solid #ccd5db;
      border-bottom: 3px solid #ccd5db;
    }
    &:after {
      content: "";
      height: 32px;
      top: auto;
    }
  }
  .timeline-content {
    padding: 40px 0 70px;
  }
  .timeline-title {
    margin: 0;
  }
}

.timeline-split {
  @media (min-width: 768px) {
    .timeline {
      display: table;
    }
    .timeline-item {
      display: table-row;
      padding: 0;
    }
    .timeline-info,
    .timeline-marker,
    .timeline-content,
    .period .timeline-info {
      display: table-cell;
      vertical-align: top;
    }
    .timeline-marker {
      position: relative;
    }
    .timeline-content {
      padding-left: 30px;
    }
    .timeline-info {
      padding-right: 30px;
    }
    .period .timeline-title {
      position: relative;
      left: -45px;
    }
  }
}

.timeline-centered {
  @extend .timeline-split;
  @media (min-width: 992px) {
    &,
    .timeline-item,
    .timeline-info,
    .timeline-marker,
    .timeline-content {
      display: block;
      margin: 0;
      padding: 0;
    }
    .timeline-item {
      padding-bottom: 40px;
      overflow: hidden;
    }
    .timeline-marker {
      position: absolute;
      left: 50%;
      margin-left: -7.5px;
    }
    .timeline-info,
    .timeline-content {
      width: 50%;
    }
    > .timeline-item:nth-child(odd) .timeline-info {
      float: left;
      text-align: right;
      padding-right: 30px;
    }
    > .timeline-item:nth-child(odd) .timeline-content {
      float: right;
      text-align: left;
      padding-left: 30px;
    }
    > .timeline-item:nth-child(even) .timeline-info {
      float: right;
      text-align: left;
      padding-left: 30px;
    }
    > .timeline-item:nth-child(even) .timeline-content {
      float: left;
      text-align: right;
      padding-right: 30px;
    }
    > .timeline-item.period .timeline-content {
      float: none;
      padding: 0;
      width: 100%;
      text-align: center;
    }
    .timeline-item.period {
      padding: 50px 0 90px;
    }
    .period .timeline-marker:after {
      height: 30px;
      bottom: 0;
      top: auto;
    }
    .period .timeline-title {
      left: auto;
    }
  }
}
</style>