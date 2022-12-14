// import React, { lazy } from 'react';
import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import Guide from './components/Guide';
import { lazy } from 'ice';
// import Editor from '@/components/IssueEditor';

const { Cell } = ResponsiveGrid;
// const Guide = lazy(() => import('./components/Guide'), true);
const Editor = lazy(() => import('@/components/IssueEditor'), true);
// const Guide = lazy(() => import('./components/Guide'));
// const Editor = lazy(() => import('@/components/IssueEditor'));
console.log('Guide: ', Guide);
console.log('Editor: ', Editor);

const Dashboard = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <Guide />
      </Cell>
      <Editor
        editorKey="508066-description"
        editorType={'DINGDING'}
        className={'DingEditor--aoneEditor--XzNBwti'}
        defaultType={'richText'} // 默认richText
        defaultValue='[\"root\",{},[\"p\",{},[\"span\",{\"data-type\":\"text\"},[\"span\",{\"data-type\":\"leaf\"},\"\"]]]]'
        onChange={(value, docType) => { localStorage.setItem('editorInputType', docType); }}
        readOnly
        userConfig={{
          // newTab: tab, // 富文本生效 点击链接时是否新开tab页
          // getUserLink, // (user) => 'http://ali.baba/${user.id}'
          // queryUser, // return 一个 Promise
        }}
        uploadImgConfig={{
          multiple: false,
          maxSize: 1024 * 1024, // 2M
          accept: 'image/jpg,image/jpeg,image/png,image/gif,image/bmp', // input  accept
          // uploadImage, // return 一个 Promise
        }}
        uploadEmbedConfig={{
          // handlePreviewFile, // return 一个 Promise
        }}
          // toolbar={toolbar}
        isFullScreen={false}
        onChangeFullScreen={(innerIsFullScreen) => {
          // setIsFullScreen(innerIsFullScreen);
        }}
      />
    </ResponsiveGrid>
  );
};

export default Dashboard;
