/*
 * @Todo: 请补充模块描述
 *
 * @Author: grayson<grayson.gao@bvox.com>
 * @Date: 2024-10-08 10:44:59
 *
 * Copyright © 2019-2024 bvox.com. All Rights Reserved.
 */

import FastClick from './fastclick'

// 设置html的大小  以便rem的使用
document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px'

window.addEventListener(
  'load',
  function () {
    FastClick.attach(document.body)
  }
)

document.documentElement.addEventListener(
  'touchmove',
  function (e) {
    if (e.touches.length > 1) {
      e.preventDefault()
    }
  }
)
