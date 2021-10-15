import React from 'react'
import CancelOutlined from '@mui/icons-material/CancelOutlined'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

function CloseButton() {
    return (
        <MyRedirect to={'/home'}>
            <Symbol sx={{ fontSize: '60px' }}  />
        </MyRedirect>
    )
}

export default CloseButton

const MyRedirect = styled(Link)``


const Symbol = styled(CancelOutlined)`
  position: absolute;
  right: 30px;
  top: 30px;
  cursor: pointer;
  cursor: pointer;
  color: #707070;
`