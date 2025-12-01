import styles from './TechStackItem.module.scss';

const TechStackItem = ({ tech }: { tech: string }) => {
    // 기술 이름을 소문자로 변환하여 클래스명으로 사용
    const techClass = tech.toLowerCase().replace(/\./g, '').replace(/\s+/g, '');

    return (
        <span
            className={`${styles.item} ${styles[techClass] || styles.default}`}
        >
            {tech}
        </span>
    );
};
export default TechStackItem;
