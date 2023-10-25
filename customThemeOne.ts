import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const customThemeOne: CustomThemeConfig = {
    name: 'customThemeOne',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "var(--color-surface-800)",
		"--theme-font-color-dark": "var(--color-surface-50)",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "2px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "var(--color-surface-100)",
		// =~= Theme Colors  =~=
		// primary | #417cb4 
		"--color-primary-50": "227 235 244", // #e3ebf4
		"--color-primary-100": "217 229 240", // #d9e5f0
		"--color-primary-200": "208 222 236", // #d0deec
		"--color-primary-300": "179 203 225", // #b3cbe1
		"--color-primary-400": "122 163 203", // #7aa3cb
		"--color-primary-500": "65 124 180", // #417cb4
		"--color-primary-600": "59 112 162", // #3b70a2
		"--color-primary-700": "49 93 135", // #315d87
		"--color-primary-800": "39 74 108", // #274a6c
		"--color-primary-900": "32 61 88", // #203d58
		// secondary | #69a0d3 
		"--color-secondary-50": "233 241 248", // #e9f1f8
		"--color-secondary-100": "225 236 246", // #e1ecf6
		"--color-secondary-200": "218 231 244", // #dae7f4
		"--color-secondary-300": "195 217 237", // #c3d9ed
		"--color-secondary-400": "150 189 224", // #96bde0
		"--color-secondary-500": "105 160 211", // #69a0d3
		"--color-secondary-600": "95 144 190", // #5f90be
		"--color-secondary-700": "79 120 158", // #4f789e
		"--color-secondary-800": "63 96 127", // #3f607f
		"--color-secondary-900": "51 78 103", // #334e67
		// tertiary | #a3d3ff 
		"--color-tertiary-50": "241 248 255", // #f1f8ff
		"--color-tertiary-100": "237 246 255", // #edf6ff
		"--color-tertiary-200": "232 244 255", // #e8f4ff
		"--color-tertiary-300": "218 237 255", // #daedff
		"--color-tertiary-400": "191 224 255", // #bfe0ff
		"--color-tertiary-500": "163 211 255", // #a3d3ff
		"--color-tertiary-600": "147 190 230", // #93bee6
		"--color-tertiary-700": "122 158 191", // #7a9ebf
		"--color-tertiary-800": "98 127 153", // #627f99
		"--color-tertiary-900": "80 103 125", // #50677d
		// success | #90b658 
		"--color-success-50": "238 244 230", // #eef4e6
		"--color-success-100": "233 240 222", // #e9f0de
		"--color-success-200": "227 237 213", // #e3edd5
		"--color-success-300": "211 226 188", // #d3e2bc
		"--color-success-400": "177 204 138", // #b1cc8a
		"--color-success-500": "144 182 88", // #90b658
		"--color-success-600": "130 164 79", // #82a44f
		"--color-success-700": "108 137 66", // #6c8942
		"--color-success-800": "86 109 53", // #566d35
		"--color-success-900": "71 89 43", // #47592b
		// warning | #dbbf6b 
		"--color-warning-50": "250 245 233", // #faf5e9
		"--color-warning-100": "248 242 225", // #f8f2e1
		"--color-warning-200": "246 239 218", // #f6efda
		"--color-warning-300": "241 229 196", // #f1e5c4
		"--color-warning-400": "230 210 151", // #e6d297
		"--color-warning-500": "219 191 107", // #dbbf6b
		"--color-warning-600": "197 172 96", // #c5ac60
		"--color-warning-700": "164 143 80", // #a48f50
		"--color-warning-800": "131 115 64", // #837340
		"--color-warning-900": "107 94 52", // #6b5e34
		// error | #db6666 
		"--color-error-50": "250 232 232", // #fae8e8
		"--color-error-100": "248 224 224", // #f8e0e0
		"--color-error-200": "246 217 217", // #f6d9d9
		"--color-error-300": "241 194 194", // #f1c2c2
		"--color-error-400": "230 148 148", // #e69494
		"--color-error-500": "219 102 102", // #db6666
		"--color-error-600": "197 92 92", // #c55c5c
		"--color-error-700": "164 77 77", // #a44d4d
		"--color-error-800": "131 61 61", // #833d3d
		"--color-error-900": "107 50 50", // #6b3232
		// surface | #768bcb 
		"--color-surface-50": "234 238 247", // #eaeef7
		"--color-surface-100": "228 232 245", // #e4e8f5
		"--color-surface-200": "221 226 242", // #dde2f2
		"--color-surface-300": "200 209 234", // #c8d1ea
		"--color-surface-400": "159 174 219", // #9faedb
		"--color-surface-500": "118 139 203", // #768bcb
		"--color-surface-600": "106 125 183", // #6a7db7
		"--color-surface-700": "89 104 152", // #596898
		"--color-surface-800": "71 83 122", // #47537a
		"--color-surface-900": "58 68 99", // #3a4463
		
	}
}


export const customThemeTwo: CustomThemeConfig = {
    name: 'customThemeTwo',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "12px",
		"--theme-border-base": "2px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "255 255 255",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #e71f7c 
		"--color-primary-50": "251 221 235", // #fbddeb
		"--color-primary-100": "250 210 229", // #fad2e5
		"--color-primary-200": "249 199 222", // #f9c7de
		"--color-primary-300": "245 165 203", // #f5a5cb
		"--color-primary-400": "238 98 163", // #ee62a3
		"--color-primary-500": "231 31 124", // #e71f7c
		"--color-primary-600": "208 28 112", // #d01c70
		"--color-primary-700": "173 23 93", // #ad175d
		"--color-primary-800": "139 19 74", // #8b134a
		"--color-primary-900": "113 15 61", // #710f3d
		// secondary | #ae4d26 
		"--color-secondary-50": "243 228 222", // #f3e4de
		"--color-secondary-100": "239 219 212", // #efdbd4
		"--color-secondary-200": "235 211 201", // #ebd3c9
		"--color-secondary-300": "223 184 168", // #dfb8a8
		"--color-secondary-400": "198 130 103", // #c68267
		"--color-secondary-500": "174 77 38", // #ae4d26
		"--color-secondary-600": "157 69 34", // #9d4522
		"--color-secondary-700": "131 58 29", // #833a1d
		"--color-secondary-800": "104 46 23", // #682e17
		"--color-secondary-900": "85 38 19", // #552613
		// tertiary | #04d6ea 
		"--color-tertiary-50": "217 249 252", // #d9f9fc
		"--color-tertiary-100": "205 247 251", // #cdf7fb
		"--color-tertiary-200": "192 245 250", // #c0f5fa
		"--color-tertiary-300": "155 239 247", // #9beff7
		"--color-tertiary-400": "79 226 240", // #4fe2f0
		"--color-tertiary-500": "4 214 234", // #04d6ea
		"--color-tertiary-600": "4 193 211", // #04c1d3
		"--color-tertiary-700": "3 161 176", // #03a1b0
		"--color-tertiary-800": "2 128 140", // #02808c
		"--color-tertiary-900": "2 105 115", // #026973
		// success | #fc2807 
		"--color-success-50": "255 223 218", // #ffdfda
		"--color-success-100": "254 212 205", // #fed4cd
		"--color-success-200": "254 201 193", // #fec9c1
		"--color-success-300": "254 169 156", // #fea99c
		"--color-success-400": "253 105 81", // #fd6951
		"--color-success-500": "252 40 7", // #fc2807
		"--color-success-600": "227 36 6", // #e32406
		"--color-success-700": "189 30 5", // #bd1e05
		"--color-success-800": "151 24 4", // #971804
		"--color-success-900": "123 20 3", // #7b1403
		// warning | #9610c6 
		"--color-warning-50": "239 219 246", // #efdbf6
		"--color-warning-100": "234 207 244", // #eacff4
		"--color-warning-200": "229 195 241", // #e5c3f1
		"--color-warning-300": "213 159 232", // #d59fe8
		"--color-warning-400": "182 88 215", // #b658d7
		"--color-warning-500": "150 16 198", // #9610c6
		"--color-warning-600": "135 14 178", // #870eb2
		"--color-warning-700": "113 12 149", // #710c95
		"--color-warning-800": "90 10 119", // #5a0a77
		"--color-warning-900": "74 8 97", // #4a0861
		// error | #38cf78 
		"--color-error-50": "225 248 235", // #e1f8eb
		"--color-error-100": "215 245 228", // #d7f5e4
		"--color-error-200": "205 243 221", // #cdf3dd
		"--color-error-300": "175 236 201", // #afecc9
		"--color-error-400": "116 221 161", // #74dda1
		"--color-error-500": "56 207 120", // #38cf78
		"--color-error-600": "50 186 108", // #32ba6c
		"--color-error-700": "42 155 90", // #2a9b5a
		"--color-error-800": "34 124 72", // #227c48
		"--color-error-900": "27 101 59", // #1b653b
		// surface | #354a9b 
		"--color-surface-50": "225 228 240", // #e1e4f0
		"--color-surface-100": "215 219 235", // #d7dbeb
		"--color-surface-200": "205 210 230", // #cdd2e6
		"--color-surface-300": "174 183 215", // #aeb7d7
		"--color-surface-400": "114 128 185", // #7280b9
		"--color-surface-500": "53 74 155", // #354a9b
		"--color-surface-600": "48 67 140", // #30438c
		"--color-surface-700": "40 56 116", // #283874
		"--color-surface-800": "32 44 93", // #202c5d
		"--color-surface-900": "26 36 76", // #1a244c
		
	}
}



export const PassPro: CustomThemeConfig = {
    name: 'PassPro',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "12px",
		"--theme-border-base": "2px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #13cd95 
		"--color-primary-50": "220 248 239", // #dcf8ef
		"--color-primary-100": "208 245 234", // #d0f5ea
		"--color-primary-200": "196 243 229", // #c4f3e5
		"--color-primary-300": "161 235 213", // #a1ebd5
		"--color-primary-400": "90 220 181", // #5adcb5
		"--color-primary-500": "19 205 149", // #13cd95
		"--color-primary-600": "17 185 134", // #11b986
		"--color-primary-700": "14 154 112", // #0e9a70
		"--color-primary-800": "11 123 89", // #0b7b59
		"--color-primary-900": "9 100 73", // #096449
		// secondary | #4fb9ba 
		"--color-secondary-50": "229 245 245", // #e5f5f5
		"--color-secondary-100": "220 241 241", // #dcf1f1
		"--color-secondary-200": "211 238 238", // #d3eeee
		"--color-secondary-300": "185 227 227", // #b9e3e3
		"--color-secondary-400": "132 206 207", // #84cecf
		"--color-secondary-500": "79 185 186", // #4fb9ba
		"--color-secondary-600": "71 167 167", // #47a7a7
		"--color-secondary-700": "59 139 140", // #3b8b8c
		"--color-secondary-800": "47 111 112", // #2f6f70
		"--color-secondary-900": "39 91 91", // #275b5b
		// tertiary | #c0fce3 
		"--color-tertiary-50": "246 255 251", // #f6fffb
		"--color-tertiary-100": "242 254 249", // #f2fef9
		"--color-tertiary-200": "239 254 248", // #effef8
		"--color-tertiary-300": "230 254 244", // #e6fef4
		"--color-tertiary-400": "211 253 235", // #d3fdeb
		"--color-tertiary-500": "192 252 227", // #c0fce3
		"--color-tertiary-600": "173 227 204", // #ade3cc
		"--color-tertiary-700": "144 189 170", // #90bdaa
		"--color-tertiary-800": "115 151 136", // #739788
		"--color-tertiary-900": "94 123 111", // #5e7b6f
		// success | #23e143 
		"--color-success-50": "222 251 227", // #defbe3
		"--color-success-100": "211 249 217", // #d3f9d9
		"--color-success-200": "200 248 208", // #c8f8d0
		"--color-success-300": "167 243 180", // #a7f3b4
		"--color-success-400": "101 234 123", // #65ea7b
		"--color-success-500": "35 225 67", // #23e143
		"--color-success-600": "32 203 60", // #20cb3c
		"--color-success-700": "26 169 50", // #1aa932
		"--color-success-800": "21 135 40", // #158728
		"--color-success-900": "17 110 33", // #116e21
		// warning | #d7e23c 
		"--color-warning-50": "249 251 226", // #f9fbe2
		"--color-warning-100": "247 249 216", // #f7f9d8
		"--color-warning-200": "245 248 206", // #f5f8ce
		"--color-warning-300": "239 243 177", // #eff3b1
		"--color-warning-400": "227 235 119", // #e3eb77
		"--color-warning-500": "215 226 60", // #d7e23c
		"--color-warning-600": "194 203 54", // #c2cb36
		"--color-warning-700": "161 170 45", // #a1aa2d
		"--color-warning-800": "129 136 36", // #818824
		"--color-warning-900": "105 111 29", // #696f1d
		// error | #d52c20 
		"--color-error-50": "249 223 222", // #f9dfde
		"--color-error-100": "247 213 210", // #f7d5d2
		"--color-error-200": "245 202 199", // #f5cac7
		"--color-error-300": "238 171 166", // #eeaba6
		"--color-error-400": "226 107 99", // #e26b63
		"--color-error-500": "213 44 32", // #d52c20
		"--color-error-600": "192 40 29", // #c0281d
		"--color-error-700": "160 33 24", // #a02118
		"--color-error-800": "128 26 19", // #801a13
		"--color-error-900": "104 22 16", // #681610
		// surface | #6a6b71 
		"--color-surface-50": "233 233 234", // #e9e9ea
		"--color-surface-100": "225 225 227", // #e1e1e3
		"--color-surface-200": "218 218 220", // #dadadc
		"--color-surface-300": "195 196 198", // #c3c4c6
		"--color-surface-400": "151 151 156", // #97979c
		"--color-surface-500": "106 107 113", // #6a6b71
		"--color-surface-600": "95 96 102", // #5f6066
		"--color-surface-700": "80 80 85", // #505055
		"--color-surface-800": "64 64 68", // #404044
		"--color-surface-900": "52 52 55", // #343437
		
	}
}