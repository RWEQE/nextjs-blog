import React, { useMemo } from 'react'
import Layout from '@/components/layout'

const StaticComponent: React.FC<any> = (props) => {
  return useMemo(() => {
    return (
      <Layout>
        react function component
      </Layout>
    )
  }, [props])
}

export default StaticComponent