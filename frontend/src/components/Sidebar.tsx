import { StyleSheet, View, Image, Pressable, FlatList } from "react-native";

import NavButton from "./NavButton";

interface navButtonData {
    id: string;
    name: string;
}

const navButtons: navButtonData[] = [
    {
        id: '1',
        name: "Home",
    },
    {
        id: '2',
        name: "Settings"
    }
];

export default function Sidebar() {
    const renderNavButton = ({ item }: { item: navButtonData }) => (
        <NavButton name={item.name} />
    );

    return (
        <View style={styles.container}>
            <View style={styles.sidebar}>
                {/* Logo */}
                <Image
                    source={require('@/assets/images/logo.webp')}
                    style={styles.logoImg}
                    resizeMode="contain"
                />

                {/* Navigation Buttons */}
                <View style={styles.navs}>
                    <FlatList
                        data={navButtons}
                        renderItem={renderNavButton}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexShrink: 0,
        alignItems: "flex-end",
        minWidth: 0,
        maxWidth: 591,
    },
    sidebar: {
        gap: 16,
        padding: 8,
        width: 256,
    },
    logoImg: {
        width: 64,
        height: 64,
    },
    navs: {
        gap: 8,
    },
});