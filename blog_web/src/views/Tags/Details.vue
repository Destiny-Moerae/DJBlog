<template>
  <div class="common" :style="{
    background: `url(${homeConfig.tagsDetailBgImg}) 0px center no-repeat`,
    backgroundSize: 'cover',
  }">
    <Header :light-index="4" background="transparent"></Header>
    <div class="content">
      <mu-paper class="pc-box" :style="{ width: isPC ? '' : '100%' }" :z-depth="5">
        <mu-list>
          <div class="sub-title">标签-{{ this.$route.query.name }}</div>
          <mu-list-item button v-for="item in list" :key="item._id" @click="goDetails(item)">
            <mu-list-item-title class="item">
              <span class="title">文章标题:{{ item.title }}</span>
              <span>创建时间：{{ timestampToDate(item.createTime * 1000) }}</span>
            </mu-list-item-title>
          </mu-list-item>

        </mu-list>
        <div class="pagination" v-if="info.totalCount > pageSize">
          <mu-pagination raised circle :total="100" :current.sync="page" :pageSize.sync="pageSize"></mu-pagination>
        </div>
      </mu-paper>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header"
import { getList } from "@/api/articles.js"
import { timestampToDate } from "@/utils"
import { mapState } from 'vuex'
export default {
  name: "tagsDetails",
  components: {
    Header,
  },
  data () {
    return {
      list: [],
      categories: [],
      tagsDetailsBgImg: "http://nevergiveupt.top/tags.jpg",
      page: 1,
      pageSize: 10
    }
  },
  computed: {
    ...mapState('app', ['homeConfig']),
  },
  created () {
    this.getArticleList()
  },
  mounted () {
  },
  methods: {
    timestampToDate,
    async getArticleList () {
      const res = await getList({
        tags: this.$route.query.name,
        page: this.page,
        pageSize: this.pageSize
      })
      // console.log("res", res)
      this.info = res.data
      this.list = res.data.list
    },

    goDetails (item) {
      this.$router.push(`/articles/details/${item._id}`)
    },
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

.pc-box {
  width: 50%;

  .header {
    font-size: 0.4rem;
  }

  /deep/.mu-item {
    height: 40px;
  }

  .sub-title {
    font-size: 1.4rem;
    font-weight: 1000;
    padding-left: 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    height: 50px;
    display: flex;
    align-items: center;
  }

  .item {
    display: flex;
    justify-content: space-between;

    .title {
      display: inline-block;
      width: 70%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }

  .pagination {
    display: flex;
    justify-content: center;
    margin: 0.53333rem 0;
  }
}
</style>