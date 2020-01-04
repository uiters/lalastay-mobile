import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Typography, Card, Spin } from 'antd';
import { Link } from 'react-router-dom';
import { withLayout } from 'components';
import { fetchAction } from 'models/repos/actions';
import './style.css';

const { Title } = Typography;

function Repos() {
  const dispatch = useDispatch();
  const repos = useSelector(state => state.repos);

  useEffect(() => {
    dispatch(fetchAction());
  }, [dispatch]);

  return (
    <div>
      <Title level={4}>My Repos</Title>
      {repos.length === 0 && <Spin />}
      <Row gutter={16}>
        {repos.length !== 0 &&
          repos.map(repo => (
            <Col key={repo.id} span={12}>
              <Card
                title={repo.name}
                extra={<Link to={`/${repo.name}`}>More</Link>}
                style={{ marginBottom: '15px' }}
              >
                <p>{repo.description}</p>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
}

export default withLayout(Repos);
