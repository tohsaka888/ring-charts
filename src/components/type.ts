import React from "react";
import { SpringValue } from 'react-spring'

export type ARCTYPE = {
  r: number;
  deg: number;
  width: number;
  transform?: SpringValue<string>;
  mx?: number;
  my?: number;
  isActive: boolean;
  key?: React.Key;
} & DATASOURCE

export type LEGENDTYPE = {
  dataSource: DATASOURCE[]; //数据源
  total: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<string>>;
};

export type DATASOURCE = {
  name: string;
  value: number;
  color: string;
  preTotal?: number;
  id: string;
}

export type CANVASTYPE = {
  width: number; // 画布宽度
  height: number; // 画布高度
  radius: number; // 圆半径
  dataSource: DATASOURCE[]; //数据源
  title?: string;
}

export type PopoverShowContextProps = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export type CurrentArcContextProps = {
  arc: DATASOURCE;
  setArc: React.Dispatch<React.SetStateAction<DATASOURCE>>;
}

export type PopoverProps = {
  total: number;
  position: {
    top: SpringValue<number>;
    left: SpringValue<number>;
  }
}

export type DeletedContextProps = {
  deletedDataSource: DATASOURCE[],
  setDeletedDataSource: React.Dispatch<React.SetStateAction<DATASOURCE[]>>;
}

export type DataSourceContextProps = {
  data: DATASOURCE[];
  setData: React.Dispatch<React.SetStateAction<DATASOURCE[]>>;
}

export type EmptyCircleProps = {
  color: string;
  radius: number;
  my: number;
  activeIndex: string;
  item?: DATASOURCE;
  setActiveIndex: React.Dispatch<React.SetStateAction<string>>;
}