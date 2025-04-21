import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import styles from './Tabs.module.scss';

interface TabItem {
    title: string;
    description: string[];
    image: string;
}

interface TabsProps {
    tabs: TabItem[];
}

const TabsComponent: React.FC<TabsProps> = ({ tabs }) => {
    return (
        <Tabs defaultActiveKey={tabs[0].title} id="soluciones-tabs" className={`${styles.tabsDraggable}`}>
            {tabs.map((tab) => (
                <Tab
                    eventKey={tab.title}
                    title={<span className={`${styles.tabTitle} ${tab.title === tabs[0].title ? styles.tabTitleActive : ''}`}>{tab.title}</span>}
                    key={tab.title}
                    className={`${styles.navLink} ${tab.title === tabs[0].title ? styles.navLinkActive : ''}`}
                >
                    <div className={styles.tabContent}>
                        <div className={styles.tabContentContainer}>
                            <div className={styles.tabContentText}>
                                <h2 className={styles.tabContentTitle}>{tab.title}</h2>
                                {tab.description.map((paragraph, index) => (
                                    <p className={styles.tabContentDescription} key={index}>{paragraph}</p>
                                ))}
                            </div>
                            <div className={styles.tabContentImage}>
                                <img src={tab.image} alt={tab.title} />
                            </div>
                        </div>
                    </div>
                </Tab>
            ))}
        </Tabs>
    );
};

export default TabsComponent;
