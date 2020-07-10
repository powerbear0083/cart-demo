import React, { Component } from 'react';
import model from './model.js';
import UiFactory from './UiFactory';
import './App.css';

const {
  basketProducts,
  displayProducts
} = model

const {
    FootGroupBlock,
    HeadGroupBlock,
    BasketItem
} = UiFactory

// console.log('===displayProducts', displayProducts);
// console.log('===basketProducts', basketProducts);
const GROUP_TYPE = { 
  NORMAL: {
    TYPE: null,
    NAME: '一般商品'
  },
  GG: {
    TYPE: 'Campaign_GG',
    NAME: '加價購'
  },
  M: {
    TYPE: 'Campaign_M',
    NAME: '滿額折'
  },
  P: {
    TYPE: 'Campaign_P',
    NAME: 'm 件 n 折'
  },
  GT: {
    TYPE: 'Campaign_GT',
    NAME: '滿額贈'
  },
  CA: {
    TYPE: 'Campaign_CA',
    NAME: '任選'
  }
}
class App extends Component {

    findHasChildItem( goodId,  basketItem ) {
        console.log('-------------basketItem---',goodId,basketItem );
        // basketItem.filter( (item) => {
        //     console.log('-------------item.parentSaleNo---',item);
        // })
    }

    findItem( displayProducts, goodId) {
        let findData = {}
        Object.keys(displayProducts).forEach( key => {
            if( key === goodId.toString() ) {
                findData = {
                    [key]: displayProducts[key] 
                }
            }
        })
        // console.log('--------------findData--',findData );
        return findData
    }
  render() {
    return (
      <div className="App">
        {
            Object.keys(basketProducts).map( ( basketItem ) => {
                {console.log('== basketItem =', basketProducts[ basketItem ]);}
                if( basketProducts[ basketItem ].groupType === GROUP_TYPE.NORMAL.TYPE ) {
                    return (
                        basketProducts[ basketItem ].items.map( (normalItem, normalIndex) => {
                            // {console.log('---basketProducts-----------item--', basketProducts[ basketItem ].items[normalIndex].isGift);}
                            if( basketProducts[ basketItem ].items[normalIndex].isKitItem ) {
                                return (
                                    <BasketItem 
                                        isChildrenBox={true}
                                        key={`normal-${normalItem.goodId}`} 
                                        isKitItem={basketProducts[ basketItem ].items[normalIndex].isKitItem}
                                        name={ Object.values(this.findItem( displayProducts, normalItem.goodId ))[0].name }
                                        imageUrl={ Object.values(this.findItem( displayProducts, normalItem.goodId ))[0].imageUrl }
                                        price={ Object.values(this.findItem( displayProducts, normalItem.goodId ))[0].price }
                                    />
                                )
                            } 
                            return (
                                <BasketItem 
                                    hasChildrenBox={basketProducts[ basketItem ].items[normalIndex].isKit }
                                    key={`normal-${normalItem.goodId}`} 
                                    isGift={basketProducts[ basketItem ].items[normalIndex].isGift}
                                    isJajago={basketProducts[ basketItem ].items[normalIndex].isJajago}
                                    isKit={basketProducts[ basketItem ].items[normalIndex].isKit}
                                    name={ Object.values(this.findItem( displayProducts, normalItem.goodId ))[0].name }
                                    imageUrl={ Object.values(this.findItem( displayProducts, normalItem.goodId ))[0].imageUrl }
                                    price={ Object.values(this.findItem( displayProducts, normalItem.goodId ))[0].price }
                                />
                            )
                            
                        })
                    )
                }

                if( basketProducts[ basketItem ].groupType === GROUP_TYPE.GG.TYPE ) {
                    return (
                        basketProducts[ basketItem ].items.map( (ggItem, ggIndex) => {
                            {console.log('--------findHasChildItem--------', this.findHasChildItem && this.findHasChildItem( ggItem.goodId,  basketProducts[ basketItem ].items) )}
                            if( basketProducts[ basketItem ].items[ggIndex].isGift ) {
                                return (
                                    <BasketItem 
                                        isChildrenBox={true}
                                        key={`normal-${ggItem.goodId}`} 
                                        isGift={basketProducts[ basketItem ].items[ggIndex].isGift}
                                        name={ Object.values(this.findItem( displayProducts, ggItem.goodId ))[0].name }
                                        imageUrl={ Object.values(this.findItem( displayProducts, ggItem.goodId ))[0].imageUrl }
                                        price={ Object.values(this.findItem( displayProducts, ggItem.goodId ))[0].price }
                                        footGroupBlock={
                                            basketProducts[ basketItem ].items.length === ggIndex + 1
                                                ? (
                                                    <FootGroupBlock 
                                                        isLastElement={true}
                                                        name={ basketProducts[ basketItem ].name }
                                                    />
                                                )
                                                : null
                                        }
                                    />
                                )
                                
                            }
                            return (
                                <BasketItem 
                                    key={`${basketItem}-${ggItem.goodId}`} 
                                    headGroupBlock={
                                        <HeadGroupBlock
                                            name={ basketProducts[ basketItem ].name }
                                        />
                                    }
                                    name={ Object.values(this.findItem( displayProducts, ggItem.goodId ))[0].name }
                                    imageUrl={ Object.values(this.findItem( displayProducts, ggItem.goodId ))[0].imageUrl }
                                    price={ Object.values(this.findItem( displayProducts, ggItem.goodId ))[0].price }
                                    footGroupBlock={
                                        <FootGroupBlock 
                                            name={ basketProducts[ basketItem ].name }
                                        />
                                    }
                                />
                            )
                        })
                    )
                }

                // if( basketProducts[ basketItem ].groupType === GROUP_TYPE.M.TYPE ) {
                //     return (
                //         basketProducts[ basketItem ].items.map( (item) => {
                //             return (
                //                 <BasketItem 
                //                     key={`${basketItem}-${item.goodId}`} 
                //                     headGroupBlock={
                //                         <HeadGroupBlock
                //                             name={ basketProducts[ basketItem ].name }
                //                         />
                //                     }
                //                     name={ Object.values(this.findItem( displayProducts, item.goodId ))[0].name }
                //                     imageUrl={ Object.values(this.findItem( displayProducts, item.goodId ))[0].imageUrl }
                //                     price={ Object.values(this.findItem( displayProducts, item.goodId ))[0].price }
                //                     footGroupBlock={
                //                         <FootGroupBlock 
                //                             name={ basketProducts[ basketItem ].name }
                //                         />
                //                     }
                //                 />
                //             )
                //         })
                //     )
                // }

                // if( basketProducts[ basketItem ].groupType === GROUP_TYPE.P.TYPE ) {
                //     return (
                //         basketProducts[ basketItem ].items.map( (item) => {
                //             return (
                //                 <BasketItem 
                //                     key={`${basketItem}-${item.goodId}`} 
                //                     headGroupBlock={
                //                         <HeadGroupBlock
                //                             name={ basketProducts[ basketItem ].name }
                //                         />
                //                     }
                //                     name={ Object.values(this.findItem( displayProducts, item.goodId ))[0].name }
                //                     imageUrl={ Object.values(this.findItem( displayProducts, item.goodId ))[0].imageUrl }
                //                     price={ Object.values(this.findItem( displayProducts, item.goodId ))[0].price }
                //                     footGroupBlock={
                //                         <FootGroupBlock 
                //                             name={ basketProducts[ basketItem ].name }
                //                         />
                //                     }
                //                 />
                //             )
                //         })
                //     )
                // }

                // if( basketProducts[ basketItem ].groupType === GROUP_TYPE.GT.TYPE ) {
                //     return (
                //         basketProducts[ basketItem ].items.map( (item) => {
                //             return (
                //                 <BasketItem 
                //                     key={`${basketItem}-${item.goodId}`} 
                //                     headGroupBlock={
                //                         <HeadGroupBlock
                //                             name={ basketProducts[ basketItem ].name }
                //                         />
                //                     }
                //                     name={ Object.values(this.findItem( displayProducts, item.goodId ))[0].name }
                //                     imageUrl={ Object.values(this.findItem( displayProducts, item.goodId ))[0].imageUrl }
                //                     price={ Object.values(this.findItem( displayProducts, item.goodId ))[0].price }
                //                     footGroupBlock={
                //                         <FootGroupBlock 
                //                             name={ basketProducts[ basketItem ].name }
                //                         />
                //                     }
                //                 />
                //             )
                //         })
                //     )
                // }

                // if( basketProducts[ basketItem ].groupType === GROUP_TYPE.CA.TYPE ) {
                //     return (
                //         basketProducts[ basketItem ].items.map( (item) => {
                //             return (
                //                 <BasketItem 
                //                     key={`${basketItem}-${item.goodId}`} 
                //                     headGroupBlock={
                //                         <HeadGroupBlock
                //                             name={ basketProducts[ basketItem ].name }
                //                         />
                //                     }
                //                     name={ Object.values(this.findItem( displayProducts, item.goodId ))[0].name }
                //                     imageUrl={ Object.values(this.findItem( displayProducts, item.goodId ))[0].imageUrl }
                //                     price={ Object.values(this.findItem( displayProducts, item.goodId ))[0].price }
                //                     footGroupBlock={
                //                         <FootGroupBlock 
                //                             name={ basketProducts[ basketItem ].name }
                //                         />
                //                     }
                //                 />
                //             )
                //         })
                //     )
                // }


            })
        }
      </div>
    );
  }
}

export default App;
