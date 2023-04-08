import { Button, Icon, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiAddCircleFill, RiDashboardFill, RiEyeFill, RiUser3Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
      <VStack spacing = {'8'} P = '16' boxShadow = {'-2px 0 10px rgba(107,70,193,0.5)'}>
      <LinkButton  Icon = {RiDashboardFill}  text = "Dashboard" url = {`dashboard`} />
      <LinkButton  Icon = {RiAddCircleFill}  text = "Create Course" url = {`createcourse`} />
      <LinkButton  Icon = {RiEyeFill}        text = "Courses" url = {`courses`} />
      <LinkButton  Icon = {RiUser3Fill}      text = "Users" url = {`users`} />
      </VStack>
    </div>
  )
}

export default Sidebar

const LinkButton = ({url,Icon,text}) => {
  return (
    <Link to = {`/admin/${url}`}>
        <Button   variant = 'ghost'>
          <Icon style = {{margin:'4px'}} />
              {text}
        </Button>
    </Link>
  )
}