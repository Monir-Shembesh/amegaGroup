import {FlatList} from 'react-native';
import React, {useCallback} from 'react';
import SocketSpace from '../../modules/OpenSocket';
import TickerMessageItem, {TICKER_ITEM_HEIGHT} from './TickerMessageItem';
import {FlashList} from '@shopify/flash-list';

interface props {
  isFlashList?: boolean;
  data: SocketSpace.IMessageResponse[];
}

const TickerMessageList = ({isFlashList, data}: props) => {
  const renderItem = useCallback(
    ({item}: {item: SocketSpace.IMessageResponse}) => {
      return <TickerMessageItem item={item} />;
    },
    [],
  );

  if (isFlashList) {
    return (
      <FlashList
        data={data}
        renderItem={renderItem}
        estimatedItemSize={TICKER_ITEM_HEIGHT}
      />
    );
  }

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item: SocketSpace.IMessageResponse, index: number) =>
        item ? `${item.a}${item.T}` : index.toString()
      }
      getItemLayout={(_data, index) => ({
        length: TICKER_ITEM_HEIGHT,
        offset: TICKER_ITEM_HEIGHT * index,
        index,
      })}
      removeClippedSubviews
      maxToRenderPerBatch={2}
      initialNumToRender={10}
      updateCellsBatchingPeriod={500}
    />
  );
};

export default TickerMessageList;
