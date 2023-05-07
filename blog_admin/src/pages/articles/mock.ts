import Mock from 'mockjs';
import qs from 'query-string';
import setupMock from '../../utils/setupMock';

const data = {
  list: [
    {
      tags: ['贷款', 'Vue', 'React', 'node.js'],
      views: 70,
      comment: 2,
      like: 1,
      collect: 1,
      isComment: true,
      isLike: true,
      isCollect: false,
      isReward: false,
      status: 1,
      publishStatus: 1,
      sort: 0,
      createTime: 1620474997,
      updateTime: 1620479875,
      _id: '60967c75c4b76ef12cd14bb5',
      content: '123',
      title: '文章标题',
      introduction: '文章简介',
      cover: 'http://img.nevergiveupt.top/5aaf7009ddf67741b0d0bc1b79470edb.jpg',
      categories: '生活',
    },
    {
      tags: ['贷款', 'Vue', 'React', 'node.js'],
      views: 70,
      comment: 2,
      like: 1,
      collect: 1,
      isComment: true,
      isLike: true,
      isCollect: false,
      isReward: false,
      status: 1,
      publishStatus: 2,
      sort: 0,
      createTime: 1620474997,
      updateTime: 1620479875,
      _id: '60967c75c4b76ef12cd14bb6',
      content: '123',
      title: '文章标题',
      introduction: '文章简介',
      cover: 'http://img.nevergiveupt.top/5aaf7009ddf67741b0d0bc1b79470edb.jpg',
      categories: '生活',
    },
  ],
};

setupMock({
  setup() {
    Mock.mock(new RegExp('/api/v1/articles/status'), (params) => {
      switch (params.type) {
        case 'PUT':
          const body = JSON.parse(params.body);
          console.log('body', body);

          const index = data.list.findIndex((item) => item._id === body.id);
          data.list[index] = { ...data.list[index], ...body };
          return {
            msg: '文章状态修改成功',
            data: null,
            code: 0,
          };
        default:
      }
    });
    Mock.mock(new RegExp('/api/v1/articles/publishStatus'), (params) => {
      switch (params.type) {
        case 'PUT':
          const body = JSON.parse(params.body);
          console.log('body', body);

          const index = data.list.findIndex((item) => item._id === body.id);
          data.list[index] = { ...data.list[index], ...body };
          return {
            msg: '文章发布状态修改成功',
            data: null,
            code: 0,
          };
        default:
      }
    });
    Mock.mock(new RegExp('/api/v1/articles'), (params) => {
      console.log('---', params);

      switch (params.type) {
        case 'PUT':
          const body = JSON.parse(params.body);
          return {
            msg: '文章修改成功',
            data: body,
            code: 0,
          };
        case 'POST':
          const postBody = JSON.parse(params.body);
          return {
            msg: '文章添加成功',
            code: 0,
            data: postBody,
          };
        case 'GET':
        default:
          const { page = 1, pageSize = 10 } = qs.parseUrl(params.url).query;
          const p = page as number;
          const ps = pageSize as number;

          return {
            list: data.list.slice((p - 1) * ps, p * ps),
            totalCount: 55,
          };
      }
    });
  },
});
