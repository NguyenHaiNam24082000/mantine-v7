import React from 'react';
import { StylesApiProps, factory, useProps, Factory } from '../../core';
import { ModalBaseCloseButton, ModalBaseCloseButtonProps } from '../ModalBase';
import { useDrawerContext } from './Drawer.context';
import classes from './Drawer.module.css';

export type DrawerCloseButtonStylesNames = 'close';

export interface DrawerCloseButtonProps
  extends ModalBaseCloseButtonProps,
    StylesApiProps<DrawerCloseButtonFactory> {}

export type DrawerCloseButtonFactory = Factory<{
  props: DrawerCloseButtonProps;
  ref: HTMLButtonElement;
  stylesNames: DrawerCloseButtonStylesNames;
  compound: true;
}>;

const defaultProps: Partial<DrawerCloseButtonProps> = {};

export const DrawerCloseButton = factory<DrawerCloseButtonFactory>((_props, ref) => {
  const props = useProps('DrawerCloseButton', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, ...others } = props;

  const ctx = useDrawerContext();

  return (
    <ModalBaseCloseButton
      ref={ref}
      {...ctx.getStyles('close', { classNames, style, styles, className })}
      {...others}
    />
  );
});

DrawerCloseButton.classes = classes;
DrawerCloseButton.displayName = '@mantine/core/DrawerCloseButton';
