import React from "react";

export type ARCTYPE = {
  r: number;
  deg: number;
  width: number;
  color: string;
  transform?: string;
  mx?: number;
  my?: number;
  isActive: boolean;
}

export type DATASOURCE = {
  name: string;
  value: number;
  color: string;
  preTotal?: number;
}


export type LEGENDTYPE = {
  dataSource: DATASOURCE[]; //数据源
  total: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
};

export type CANVASTYPE = {
  width: number; // 画布宽度
  height: number; // 画布高度
  radius: number; // 圆半径
  dataSource: DATASOURCE[]; //数据源
  title?: string;
}
