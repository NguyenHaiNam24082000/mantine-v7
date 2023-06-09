import React, { forwardRef } from 'react';
import { ElementProps, useProps, Input, InputProps } from '@mantine/core';
import { clamp } from '@mantine/hooks';
import { useSpotlightContext } from './Spotlight.context';

export interface SpotlightSearchProps
  extends InputProps,
    ElementProps<'input', 'size' | 'value' | 'onChange'> {}

const defaultProps: Partial<SpotlightSearchProps> = {
  size: 'lg',
};

function selectAction(index: number) {
  const actions = document.querySelectorAll('[data-action]');
  const selectedIndex = clamp(index, 0, actions.length - 1);
  actions.forEach((action) => action.removeAttribute('data-selected'));
  actions[selectedIndex]?.scrollIntoView({ block: 'nearest' });
  actions[selectedIndex]?.setAttribute('data-selected', 'true');
  return selectedIndex;
}

export const SpotlightSearch = forwardRef<HTMLInputElement, SpotlightSearchProps>((props, ref) => {
  const { classNames, styles, onKeyDown, ...others } = useProps(
    'SpotlightSearch',
    defaultProps,
    props
  );
  const ctx = useSpotlightContext();
  const inputStyles = ctx.getStyles('search');

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyDown?.(event);

    if (event.nativeEvent.code === 'ArrowDown') {
      event.preventDefault();
      ctx.setSelected(selectAction(ctx.selected + 1));
    }

    if (event.nativeEvent.code === 'ArrowUp') {
      event.preventDefault();
      ctx.setSelected(selectAction(ctx.selected - 1));
    }
  };

  return (
    <Input
      ref={ref}
      classNames={[{ input: inputStyles.className }, classNames] as any}
      styles={[{ input: inputStyles.style }, styles] as any}
      value={ctx.query}
      onChange={(event) => {
        ctx.setQuery(event.currentTarget.value);
        ctx.setSelected(selectAction(0));
      }}
      {...others}
      onKeyDown={handleKeyDown}
    />
  );
});

SpotlightSearch.displayName = '@mantine/spotlight/SpotlightSearch';