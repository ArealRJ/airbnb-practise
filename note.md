#### 复习
flex布局-flex子元素属性
less语法

useEffect
useSelector

redux thunk
rtk  createAsyncThunk

box-sizing: border-box;

classnames库

向子组件传递函数，使用useCallback进行性能优化

useRef不会触发组件重新渲染

transform
translate

flex-shrink: 0;

background-image: linear-gradient(-180deg, rgba(0,0,0,0) 3%, rgb(0,0,0) 100%);

#### bug
1.无法使用material ui的组件
解决：安装 @emotion/react @emotion/styled

2.header使用fixed定位，页面滚动时，header内容被遮盖
解决：header添加z-index

3.配置完路由，页面无法加载
解决：给App包裹 ```<Suspense fallback={<div>loading...</div>}> </Suspense>```

4.```onClick={itemClickHandle(index)}```报错死循环
解决：```onClick={e => itemClickHandle(index)}```，原因是直接传入一个函数并传入参数，会被当做函数调用，所以需要传入一个函数表达式

5.offset获取到的是元素左上角距离浏览器左边框的距离，应该是获取距离父元素的距离
解决：给父元素加上相对定位，offsetParent元素就是一个指向最近的包含该元素的定位的元素或body，table，th，tr元素

6.longfor-item图片无法等比例放大，图片宽度不变
解决：给父级设置flex-shrink: 0;