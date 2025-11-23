import { CrownIcon, DownloadIcon, KeyIcon } from "@/components/Icons";
import { Button } from "@/components/ui/Button";
import { FeatureBadge } from "@/components/ui/FeatureBadge";
import SecurityPolygonScene from "@/pages/Home/components/SecurityPolygon";
import { motion, type Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";


// 등장 간격 조절용 variants
const heroParent: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// 실제 애니메이션 variants
const heroItem: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1], // easeOutExpo 급격한 상승곡선
    },
  },
};

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex justify-center items-center text-center">

      {/* 배경 */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-brand/5 dark:from-brand/10 dark:via-transparent dark:to-brand/10">
        <SecurityPolygonScene />
      </div>

      {/* 간격 조절용 div */}
      <motion.div
        className="relative flex flex-col items-center gap-10"
        variants={heroParent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        {/* 기능 배지 */}
        <motion.div variants={heroItem}>
          <FeatureBadge
            intent="brand"
            border={true}
            shape="pill"
            leftIcon={<CrownIcon />}>
            PASSWORD MANAGER
          </FeatureBadge>
        </motion.div>

        {/* 내용 */}
        <motion.h1
          variants={heroItem}
          className="text-6xl lg:text-7xl font-black leading-tight text-text-light dark:text-white"
        >
          비밀번호 관리의<br />
          <span className="gradient-text">새로운 표준</span>
        </motion.h1>

        {/* 버튼 */}
        <motion.div
          variants={heroItem}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button
            intent="primary"
            size="lg"
            onClick={() => navigate("/download")}
            leftIcon={<DownloadIcon />}
            aria-label="다운로드 페이지로 이동"
          >
            무료로 시작하기
          </Button>

          <Button
            intent="secondary"
            size="lg"
            onClick={() => navigate("/product")}
            leftIcon={<KeyIcon />}
            aria-label="제품 페이지로 이동"
          >
            제품 더 알아보기
          </Button>
        </motion.div>
      </motion.div>
    </section >
  );
};

export default Hero;
