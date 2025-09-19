export const formatDate = (date: string) => {
    const [year, month, day] = date.split('-');
    return `${year}년 ${month}월 ${day}일`;
};
