import DefaultLayout from '../_layouts/default';
import { DASHBOARD_ANIMATION } from './animation';
import Sidebar from './Sidebar';
import { Container, AnimatedWrapper } from './styles';

const Dashboard: React.FC = () => {
  return (
    <DefaultLayout>
      <Container>
        <AnimatedWrapper
          variants={DASHBOARD_ANIMATION}
          initial="unMounted"
          animate="mounted"
          exit="unMounted"
          transition={{ duration: 1.5 }}
        >
          <Sidebar />
          <h1>Dashboard</h1>
        </AnimatedWrapper>
      </Container>
    </DefaultLayout>
  );
};

export default Dashboard;
