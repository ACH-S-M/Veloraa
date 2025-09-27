import React from 'react';
import { Card_PopulerSmall } from '@/components-user/Card-PopulerSmall';
import { type TypeProdukPopuler} from '@/types';


export function LayoutPopuler({Produk} :TypeProdukPopuler ) {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
        <Card_PopulerSmall Produk={Produk}/>
    </div>
  );
}
