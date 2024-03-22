'use client';

import { FloatingPortal, Placement, autoUpdate, flip, offset, shift, useDismiss, useFloating, useFocus, useHover, useInteractions, useRole } from '@floating-ui/react';
import { ReactNode, cloneElement, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
 
export const Tooltip = ({ content, showDelay = 0, hideDelay = 100, placement = 'top', children }) => {
    const [open, setOpen] = useState(false);
 
    const { x, y, reference, floating, strategy, context, placement: computedPlacement } = useFloating({
        placement,
        open,
        onOpenChange(open) {
            setOpen(open);
        },
        middleware: [offset(5), flip(), shift({ padding: 8 })],
        whileElementsMounted: autoUpdate
    });
 
    const { getReferenceProps, getFloatingProps } = useInteractions([
        useHover(context, { delay: showDelay, restMs: hideDelay }),
        useFocus(context),
        useRole(context, { role: 'tooltip' }),
        useDismiss(context),
    ]);
 
    const translate = {
        'top': { translateY: 5, },
        'bottom': { translateY: -5, },
        'left': { translateX: 5 },
        'right': { translateX: -5 },
    }[computedPlacement.includes('-') ? computedPlacement.split('-')[0] : computedPlacement];
 
    return (<>
        {cloneElement(
            children,
            getReferenceProps({ ref: reference, ...children.props })
        )}
        <FloatingPortal>
            <AnimatePresence>
                {open && <motion.div
                    initial={{ opacity: 0, ...translate }}
                    animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                    exit={{ opacity: 0, ...translate }}
                    {...getFloatingProps({
                        ref: floating,
                        className: 'px-2 py-5 z-50 bg-black',
                        style: {
                            position: strategy,
                            top: y ?? 0,
                            left: x ?? 0,
                        }
                    })}
                >
                    {content}
                </motion.div>}
            </AnimatePresence>
        </FloatingPortal>
    </>);
};