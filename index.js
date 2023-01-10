import React, { useState } from 'react';
import { FlatList, RefreshControl, SafeAreaView } from 'react-native';
import { BaseStyle, useTheme } from './config';
import {
    Header,
    Icon,
    Text,
    RateDetail,
    CommentItem,
} from './components';
import { ReviewData } from './data';
import { useTranslation } from 'react-i18next';

export default Review = () => {
    const { colors } = useTheme();
    const { t } = useTranslation();

    const [refreshing] = useState(false);
    const [rateDetail] = useState({
        point: 4.7,
        maxPoint: 5,
        totalRating: 5,
        data: ['5%', '5%', '35%', '40%', '10%'],
    });
    const [reviewList] = useState(ReviewData);

    return (
        <SafeAreaView style={BaseStyle.safeAreaView} forceInset={{ top: 'always' }}>
            <Header
                title={t('Reviews')}
                renderLeft={() => {
                    return (
                        <Icon
                            name="arrow-left"
                            size={20}
                            color={colors.primary}
                            enableRTL={true}
                        />
                    );
                }}
                renderRight={() => {
                    return (
                        <Text headline primaryColor numberOfLines={1}>
                            {t('Replay')}
                        </Text>
                    );
                }}
                onPressLeft={() => { }}
                onPressRight={() => { }}
            />

            <FlatList
                contentContainerStyle={{ padding: 20 }}
                refreshControl={
                    <RefreshControl
                        colors={[colors.primary]}
                        tintColor={colors.primary}
                        refreshing={refreshing}
                        onRefresh={() => { }}
                    />
                }
                data={reviewList}
                keyExtractor={(item, index) => item.id}
                ListHeaderComponent={() => (
                    <RateDetail
                        point={rateDetail.point}
                        maxPoint={rateDetail.maxPoint}
                        totalRating={rateDetail.totalRating}
                        data={rateDetail.data}
                    />
                )}
                renderItem={({ item }) => (
                    <CommentItem
                        style={{ marginTop: 10 }}
                        image={item.source}
                        name={item.name}
                        rate={item.rate}
                        date={item.date}
                        title={item.title}
                        comment={item.comment}
                    />
                )}
            />
        </SafeAreaView>
    );
};
