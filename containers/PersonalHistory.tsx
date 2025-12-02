import styles from './PersonalHistory.module.scss';
import nisoftLogo from '@/public/company/nisoft.webp';
import Image from 'next/image';

const PersonalHistory = () => {
    return (
        <div className={styles.personalHistory}>
            <h2 className={styles.title}>경력</h2>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.company_info}>
                        <div className={styles.company_logo}>
                            <Image
                                src={nisoftLogo}
                                alt="엔아이소프트"
                                priority
                                width={80}
                                height={80}
                            />
                        </div>
                        <div>
                            <h3 className={styles.company_name}>
                                엔아이소프트
                            </h3>
                            <span className={styles.position}>
                                프론트엔드 개발
                            </span>
                        </div>
                    </div>
                    <span className={styles.period}>2023.10 - 2025.07</span>
                </div>
                <div className={styles.description}>
                    <p>
                        {/* 주요 업무에 대한 설명을 작성합니다. 프로젝트 경험, 기술
                        스택, 성과 등을 간략하게 설명할 수 있습니다. */}
                        1년 9개월간 React 기반 프론트엔드 개발을 담당했고,
                        사용자 중심 UI/UX 구현과 성능 최적화에 집중했습니다.
                    </p>
                </div>
                <div className={styles.work_list}>
                    <h4 className={styles.work_list_title}>주요 업무</h4>
                    <ul>
                        <li>
                            <strong>React</strong> 기반 SPA 프론트엔드 개발 및
                            반응형 UI/UX 구현
                        </li>
                        <li>
                            <strong>RESTful API</strong> 설계 및 연동, 비동기
                            데이터 처리 최적화 및 <strong>CRUD</strong> 기능
                            구현
                        </li>
                        <li>
                            <strong>Spreadsheet API</strong> 및{' '}
                            <strong>i18n</strong>을 이용한 다국어 지원 시스템
                            설계 및 구축 및 구축
                        </li>
                        <li>
                            재사용 가능한 <strong>컴포넌트</strong> 및{' '}
                            <strong>커스텀 훅</strong> 개발
                        </li>
                        <li>
                            <strong>Open API</strong>를 활용한 음악 평가 플랫폼
                            프론트엔드 전담
                        </li>
                        <li>
                            <strong>Redux Toolkit</strong> 기반 전역 상태 관리
                        </li>
                        <li>
                            <strong>nivo</strong> 차트 라이브러리를 이용한
                            데이터 시각화 구현
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default PersonalHistory;
