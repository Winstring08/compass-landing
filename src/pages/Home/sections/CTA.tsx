import { Link } from "react-router-dom";
import { FlashIcon } from "../../../components/Icons";
import { motion, type Variants } from "framer-motion";
import { button } from "@/styles/recipes/button";
import { card } from "@/styles/recipes/card";
import Badge from "@/components/ui/Badge";

// 아래→위 슬라이드 인
const ctaParent: Variants = {
  hidden: {},
  show: {
    transition: { when: "beforeChildren", staggerChildren: 0.08 },
  },
};
const ctaItem: Variants = {
  hidden: { y: 24, opacity: 0 },
  show: {
    y: 0, opacity: 1,
    transition: { type: "tween", duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const CTA: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center bg-surface-light-300 dark:bg-surface-dark-600">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* 카드 레시피 사용 */}
          <div className={card({ tone: "cta", padding: "xl", align: "center" }).root()}>
            {/* 아이콘 애니메이션 (기존 유지) */}
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              variants={{ hidden: {}, show: { transition: { when: "beforeChildren" } } }}
              className="text-center"
            >
              <Badge intent = "crown" elevated={true}/>

              {/* 타이틀은 고정 */}
              <h2 className="text-3xl font-bold mt-8 mb-4 text-text-light dark:text-white">
                지금 바로 시작하기
              </h2>

              {/* 타이틀 이후 요소들만 아래→위 슬라이드 인 */}
              <motion.div
                className="will-change-transform"
                variants={ctaParent}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.7 }}
              >
                <motion.p
                  variants={ctaItem}
                  className="text-lg text-text-light dark:text-text-secondary mb-8 max-w-2xl mx-auto"
                >
                  Compass의 모든 기능을
                  신용카드 등록 없이 바로 시작
                </motion.p>

                <motion.div
                  variants={ctaItem}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <Link to="/download" className={button({ intent: "primary", size: "lg" }).root()}>
                    <FlashIcon size={20} className="mr-2" />
                    무료로 시작하기
                  </Link>
                  <Link to="/product" className={button({ intent: "secondary", size: "lg" }).root()}>
                    제품 더 알아보기
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
