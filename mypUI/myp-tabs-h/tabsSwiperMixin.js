//
// 用于tabs-swiper参考
//
export default {
	data() {
		return {
			mypIsTap: false,
			mypDx: 0,
			mypLastTabIndex: 0,
			mypTapIndex: 0,
			mypCurrentTab: 0
		}
	},
	methods: {
		mypOnSwiperChange(e) {
			// this.current = e.detail.current
			// #ifndef APP-PLUS || H5 || MP-WEIXIN || MP-QQ
			const index = e.detail.current
			this.mypToSwitchTab(index)
			// #endif
		},
		mypOnSwiperScroll(e) {
			if (this.mypIsTap) return;
			// #ifdef APP-PLUS || H5 || MP-WEIXIN || MP-QQ
			const offsetX = e.detail.dx
			this.mypDx = offsetX
			// #endif
		},
		mypOnSwiperAnimationFinish(e) {
			// #ifdef APP-PLUS || H5 || MP-WEIXIN || MP-QQ
			const index = e.detail.current
			this.mypLastTabIndex = index
			this.mypToSwitchTab(index)
			if (this.mypTapIndex === index) {
				this.mypIsTap = false
			}
			// #endif
		},
		mypToTabTab(i) {
			this.mypIsTap = true
			this.mypTapIndex = i
			this.mypToSwitchTab(i)
		},
		mypToSwitchTab(i) {
			this.mypCurrentTab = i
		}
	}
}
