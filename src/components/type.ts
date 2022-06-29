import React from "react";

export type ARCTYPE = {
  r: number;
  deg: number;
  width: number;
  transform?: string;
  mx?: number;
  my?: number;
  isActive: boolean;
} & DATASOURCE

export type LEGENDTYPE = {
  dataSource: DATASOURCE[]; //数据源
  total: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
};

export type DATASOURCE = {
  name: string;
  value: number;
  color: string;
  preTotal?: number;
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
    x: number;
    y: number;
  }
}