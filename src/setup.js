
import {
  Layout, Menu, Dropdown, Avatar, Badge, Row, Col,
  Button, Icon, Card, Skeleton, ConfigProvider,
  Form, Input, Select, Checkbox, Radio,
  BackTop,
  List, Modal,
  Alert,
  Spin,
  Result,
  Upload,
  Carousel,
  DatePicker,
  Tooltip,
  Pagination,
  Popover,
  Steps,
  Table,
  Progress,
  Tabs,
  Drawer
} from 'ant-design-vue'


export function setupAnt(app) {
  app.use(Layout)

  app.use(Menu)

  app.use(Icon)

  app.use(Card)

  app.use(Dropdown)

  app.use(Avatar)

  app.use(Badge)

  app.use(Row)
  app.use(Col)

  app.use(Form)
  app.use(Input)

  app.use(Select)
  app.use(Checkbox)
  app.use(Radio)

  app.use(List)

  app.use(Modal)

  app.use(Button)
  app.use(Skeleton)
  app.use(BackTop)
  app.use(ConfigProvider)

  app.use(Spin)

  app.use(Result)

  app.use(Upload)

  app.use(Carousel)
  app.use(DatePicker)

  app.use(Tooltip)
  app.use(Pagination)
  app.use(Popover)
  app.use(Steps)
  app.use(Table)
  app.use(Progress)
  app.use(Tabs)
  app.use(Alert)
  app.use(Drawer)
}

