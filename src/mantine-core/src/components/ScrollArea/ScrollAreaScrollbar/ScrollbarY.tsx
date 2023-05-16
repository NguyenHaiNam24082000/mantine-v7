import React, { forwardRef, useEffect, useRef } from 'react';
import { useMergedRef } from '@mantine/hooks';
import { ScrollAreaScrollbarImpl } from './Scrollbar';
import { useScrollAreaContext } from '../ScrollArea.context';
import { ScrollAreaScrollbarAxisProps } from '../ScrollArea.types';
import { isScrollingWithinScrollbarBounds, getThumbSize, toInt } from '../utils';

export const ScrollAreaScrollbarY = forwardRef<HTMLDivElement, ScrollAreaScrollbarAxisProps>(
  (props, forwardedRef) => {
    const { sizes, onSizesChange, ...others } = props;
    const context = useScrollAreaContext();
    const [computedStyle, setComputedStyle] = React.useState<CSSStyleDeclaration>();
    const ref = useRef<HTMLDivElement>(null);
    const composeRefs = useMergedRef(forwardedRef, ref, context.onScrollbarYChange);

    useEffect(() => {
      if (ref.current) setComputedStyle(getComputedStyle(ref.current));
    }, [ref]);

    return (
      <ScrollAreaScrollbarImpl
        {...others}
        data-orientation="vertical"
        ref={composeRefs}
        sizes={sizes}
        style={{
          // @YYY
          ['--radix-scroll-area-thumb-height' as any]: `${getThumbSize(sizes)}px`,
          ...props.style,
        }}
        onThumbPointerDown={(pointerPos) => props.onThumbPointerDown(pointerPos.y)}
        onDragScroll={(pointerPos) => props.onDragScroll(pointerPos.y)}
        onWheelScroll={(event, maxScrollPos) => {
          if (context.viewport) {
            const scrollPos = context.viewport.scrollTop + event.deltaY;
            props.onWheelScroll(scrollPos);
            if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
              event.preventDefault();
            }
          }
        }}
        onResize={() => {
          if (ref.current && context.viewport && computedStyle) {
            onSizesChange({
              content: context.viewport.scrollHeight,
              viewport: context.viewport.offsetHeight,
              scrollbar: {
                size: ref.current.clientHeight,
                paddingStart: toInt(computedStyle.paddingTop),
                paddingEnd: toInt(computedStyle.paddingBottom),
              },
            });
          }
        }}
      />
    );
  }
);