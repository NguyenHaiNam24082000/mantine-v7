import React, { cloneElement } from 'react';
import { upperFirst } from '@mantine/hooks';
import { isElement, useProps } from '@mantine/core';
import { DropzoneContextValue, useDropzoneContext } from './Dropzone.context';

export interface DropzoneStatusProps {
  // eslint-disable-next-line react/no-unused-prop-types
  children: React.ReactNode;
}

function createDropzoneStatus(status: keyof DropzoneContextValue) {
  const Component = (props: DropzoneStatusProps): React.ReactNode => {
    const { children, ...others } = useProps(`Dropzone${upperFirst(status)}`, {}, props);

    const ctx = useDropzoneContext();
    const _children = isElement(children) ? children : <span>{children}</span>;

    if (ctx[status]) {
      return cloneElement(_children as JSX.Element, others);
    }

    return null;
  };

  Component.displayName = `@mantine/dropzone/${upperFirst(status)}`;

  return Component;
}

export const DropzoneAccept = createDropzoneStatus('accept');
export const DropzoneReject = createDropzoneStatus('reject');
export const DropzoneIdle = createDropzoneStatus('idle');

export type DropzoneAcceptProps = DropzoneStatusProps;
export type DropzoneRejectProps = DropzoneStatusProps;
export type DropzoneIdleProps = DropzoneStatusProps;