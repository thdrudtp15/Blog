import styles from './Others.module.scss';

const Item = ({title, detail, period, }: {title: string, detail: string, period?: string}) => {
    return <div className={styles.content}>
    <div className={styles.item}>
        <div className={styles.item_header}>
            <div className={styles.item_info}>
                <h4 className={styles.item_name}>
                    {title}
                </h4>
                <span className={styles.item_detail}>
                    {detail}
                </span>
            </div>
           {period && <span className={styles.item_period}>
                {period}
            </span>}
        </div>
    </div>
</div>
}

const Others = () => {
    return (
        <div className={styles.others}>
            <h2 className={styles.title}>기타</h2>
            <div className={styles.sections}>
                <div className={styles.section}>
                    <h3 className={styles.section_title}>학력</h3>
                    <div className={styles.content}>
                        <Item title="학점은행제" detail="컴퓨터 공학 (졸업)" period="2024.03 - 2025.08" />
                        <Item title="중부대학교" detail="편입(졸업)" period="2020.03 - 2023.2" />
                    </div>
                </div>
                <div className={styles.section}>
                    <h3 className={styles.section_title}>자격증</h3>
                    <Item title="정보처리기사" detail="한국산업인력공단"  period='2025.12'/>
                </div>
                <div className={styles.section}>
                    <h3 className={styles.section_title}>교육 이수</h3>
                    <Item title="멀티캠퍼스" detail="채용연계 풀스택 개발자 부트캠프(스프링&리액트)" period="2023.01 - 2023.06" />
                </div>
              
            </div>
        </div>
    );
};
export default Others;
