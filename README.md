# ring-charts

## Props

```ts
export type DATASOURCE = {
  name: string;
  value: number;
  color: string;
  preTotal?: number;
};

export type CANVASTYPE = {
  width: number; // 画布宽度
  height: number; // 画布高度
  radius: number; // 圆半径
  dataSource: DATASOURCE[]; //数据源
  title?: string;
};
```
