import React, { Fragment } from 'react';
const UiFactory = ( () => {
    function FootGroupBlock( 
        {
            isLastElement = false,
            name = ''
        } 
    ) {
        return (
            <div 
                className={`basket-item__foot-group ${isLastElement ? 'is--last-element' : ''}`}
            >
                <span>
                    {
                        name
                    }
                </span>
            </div>
        )
    }
    function HeadGroupBlock( 
        {
            name
        } 
    ) {
        return (
            <div className="basket-item__head-group">
                {
                    name
                }
            </div>
        )
    }
    function BasketItem(
        {
            childrenHeadBlock = null,
            hasChildrenBox = false,
            isChildrenBox = false,
            headGroupBlock = null,
            isGift = false,
            isJajago = false,
            isKit = false,
            isKitItem = false,
            name = '',
            imageUrl = '',
            price = null,
            footGroupBlock = null
        }
    ) {
        function detectClassName( isChildrenBox, hasChildrenBox) {
            let hookClassName = ''
            if( isChildrenBox ) {
                hookClassName = 'is--chidlren-box'
            }

            if( hasChildrenBox ) {
                hookClassName = 'has--chidlren-box'
            }
            return hookClassName
        }
        // console.log('----------------', isGift, isJajago, isKit, isKitItem);
        return (
            <div 
                className={`basket-item__box bg-white ${detectClassName( isChildrenBox, hasChildrenBox)}`}
            >
                <div className="basket-item__head">
                    { headGroupBlock ? headGroupBlock : null }
                    { childrenHeadBlock ? childrenHeadBlock : null }
                    <div className="basket-item__head-body">
                        {
                            isGift || isJajago || isKit
                                ? (
                                    <span className="tag">
                                        { isGift ? '贈品' : null }
                                        { isJajago ? '加購' : null }
                                        { isKit ? '套組' : null }
                                    </span>
                                )
                                : null
                        }
                        <span>
                            {
                                name
                            }
                        </span>
                    </div>
                </div>
                <div className="basket-item__body">
                    <div className="basket-item__img">
                        <img src={ imageUrl} />
                    </div>
                </div>
                <div className="basket-item__footer">
                    {
                        isChildrenBox
                            ? null
                            : (
                                <Fragment>
                                    <div className="basket-item__price">
                                        <span>商品價格</span>
                                        <span className="price">
                                        {
                                            price
                                        }
                                        </span>
                                    </div>
                                    <div className="basket-item__discount">
                                        <a className="btn-with-border" href="" title="輸入結帳折扣碼">輸入結帳折扣碼</a>
                                    </div>
                                </Fragment>
                            )
                    }
                    
                    { footGroupBlock ? footGroupBlock : null }
                </div>

            </div>
        )
    }
    return {
        FootGroupBlock,
        HeadGroupBlock,
        BasketItem
    }
})()
export default UiFactory