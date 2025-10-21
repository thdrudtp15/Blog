import Banner from '@/containers/Banner';
import supabase from '@/lib/supabase';

const Page = async () => {
    const { data, error } = await supabase.from('posts_by_claude').select('*');
    if (error) {
        console.error(error);
    }
    console.log(data);
    return (
        <main>
            <Banner>
                <Banner.Title title="Daily" />
                <Banner.Description description="매일 갱신되는 글 with Claude" />
            </Banner>
        </main>
    );
};

export default Page;

// 주제는 프론트엔드 (내가 볼 것이기 때문)

// 한 주에 한 번씩 카테고리? 생성 -> DB에 저장 (이건 내가 설정)
// 해당하는 카테고리에 맞는 글을 1주일 동안 매일 오전 9시에 생성 및 저장 -> DB에 저장
// 난이도는 7일 중 2일 쉬움 2일 보통 2일 어려움 1일 마지막날 쉬움

// 필요한 컬럼
// 카테고리
// 글
// 난이도
// 생성일
// 삭제여부
// 삭제사유
