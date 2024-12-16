import React, { useRef, useEffect } from "react";
import cls from '@xxhls/classnames'

const SquareNine: React.FC = () => {

    const contentRef = useRef<HTMLDivElement>(null);
    const activeRef = useRef<boolean>(false);

    const init = () => {
        activeRef.current = false;
    };

    const boxClickHandler = () => {
        if (activeRef.current) {
            return;
        }
        activeRef.current = true;
        let transitionFlag = true;
        let contentDom = contentRef.current!;
        contentDom.addEventListener("webkitTransitionEnd", function (e) {
            if (e.target === e.currentTarget && transitionFlag) {
                transitionFlag = false;
                removeListener();
            }
        });
    }

    const removeListener = () => {
        contentRef.current!.removeEventListener("webkitTransitionEnd", removeListener);
    }


    useEffect(() => {
        return () => {
            removeListener();
        };
    }, []);

    return (
        <>
            <div className="nutbig-giftBox nutbig-giftBox_wrapper">
                <div className="nutbig-giftBox_content" ref={contentRef} onClick={boxClickHandler}>
                    <div className={cls("nutbig-giftBox_cover", {
                        "nutbig-giftBox_cover--active": activeRef.current
                    })}></div>
                    <div className="nutbig-giftBox_box"></div>
                    <div className={cls("nutbig-giftBox_line", {
                        "nutbig-giftBox_line--active": activeRef.current
                    })}></div>
                </div>
            </div>
        </>
    );
};

export default SquareNine;
