import React from 'react';
import { Text, TextProps, ElementProps } from '@mantine/core';

interface HtmlTextProps extends TextProps, ElementProps<'span'> {
  children: string;
}

function replaceBackticks(str: string): string {
  return str.replace(/`([^`]+)`/g, '<code>$1</code>');
}

export function HtmlText({ children, ...others }: HtmlTextProps) {
  return (
    <Text
      component="span"
      data-docs-inline-code
      dangerouslySetInnerHTML={{ __html: replaceBackticks(children) }}
      fz="sm"
      {...others}
    />
  );
}