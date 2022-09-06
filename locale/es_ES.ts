export default {
	locale: "Español (España)",
	// Common / Repeated words and phrases
	common: {
		appName: "7TV",
		appHost: "7tv.app",
		supportEmail: "kathy{'@'}7tv.app",
		learnMore: "Más información",
		more: "Más",
		retry: "Reintentar",
		back: "Volver",
		download: "Descargar | Descargas",
		features: "Características",
		comments: "Comentarios",
		search: "Buscar",
		update: "Actualizar",
		report: "Reportar",
		delete: "Eliminar",
		cancel: "Cancelar",
		submit: "Enviar",
		activity: "Actividad",
		loading: "Cargando",
		save_changes: "Guardar cambios",
		reset: "Restablecer",
		object: {
			user: "Usuario",
			emote_set: "Conjunto de Emotes",
			emote: "Emote",
		},
	},
	// Text that appears on the home page
	home: {
		slogan: "La Plataforma de Emotes para Todos",
		app_description: "Gestiona con facilidad cientos de emotes para tus canales de Twitch o YouTube",
		why_app: "¿Por qué @:common.appName{'?'}",
		download_browser: "Extensión de navegador",
		download_mobile: "Aplicaciones Móviles",
		download_misc: "Otras Aplicaciones",
		features: {
			emote_sets: {
				name: "Conjuntos de Emotes",
				detail: "Agrupa emotes en conjuntos personalizables que pueden ser compartidos con otros usuarios o rápidamente cambiados a tu canal.",
			},
			many_emote_slots: {
				name: "Cientos de espacios para emotes",
				detail: "Empieza con {0} espacios, con un máximo posible de {1} y sin pagar.",
			},
			channel_emote_names: {
				name: "Nombres de emotes por canal",
				detail: "¿No te gusta el nombre que le colocó su autor al emote? No hay problema, puedes cambiarlo sólo para tu canal.",
			},
			real_time: {
				name: "Tiempo real",
				detail: "El cambio de emotes en tu canal ocurre al instante, para todos los espectadores, no es necesario hacer F5.",
			},
			emote_versions: {
				name: "Distintas versiones de emotes",
				detail: "Cambia entre variantes temáticas o actualiza un emote a una versión mejorada.",
			},
			userbase: {
				name: "Gran Comunidad",
				detail: "@:common.appName sirve a {0}+ usuarios únicos diarios y tiene una biblioteca de más de {1} emotes públicos",
			},
			next_gen: {
				name: "Formatos de imagen de última generación, como WEBP y AVIF",
				detail: "Utilizamos nuevos formatos de imagen más optimizados para reducir el uso del ancho de banda.",
			},
			source_available: {
				name: "Fuente Disponible",
				detail: "Nuestro código base completo está disponible en GitHub, con una licencia de código abierto. Cualquiera puede ver y contribuir.",
			},
		},
		socials: {
			discord: "Únete a @:common.appName en Discord",
			discord_online_count: "{0} usuario(s) conectado(s) ahora",
			twitter: "Síguenos en Twitter",
			github: "Contribuir",
		},
		legal: {
			terms: "Términos y Condiciones",
			privacy: "Política de Privacidad",
			unaffiliated: "@:common.appName no está afiliado a Twitch Interactive",
		},
	},
	// Nav Bar
	nav: {
		home: "Inicio",
		about: "Acerca de",
		emotes: "Emotes",
		store: "Suscribirse",
		admin: "Admin",
		sign_in: "Iniciar sesión",
		user_search: "Buscar Perfiles",
		wip_notice: {
			heading: "Bienvenido al nuevo sitio web de @:common.appName",
			text1: "Este es un vistazo a la próxima forma de experimentar @:common.appName{'.'}",
			text2: "¡Explora las novedades y danos tu opinión! Ten en cuenta que se producirán cambios rápidos y que puede fallar con frecuencia.",
		},
	},
	activity: {
		emote_created: "Creó {T}",
		emote_renamed: "Renombró {T} de {O} a {N}",
		emote_listing_approved: "Aprobó {T} para la lista pública",
		emote_listing_revoked: "Removió {T} de la lista pública",
		emote_merged: "Fusionó {T} en {0}",
		emote_ownership_transferred: "Transfirió la propiedad de {T} a {U}",
		emote_restored: "Restauró {T}",
		emote_updated: "Cambió las propiedades de {T}",
		emote_deleted: "Eliminó {T}",
		emote_tags_updated: "Estableció etiquetas para {T}: {N}",
		emote_processed: "Ejecutó un nuevo trabajo de procesamiento para {T}",
		emote_version_created: "Creó la versión '{VER}' para {T}",
		emote_version_renamed: "Renombró la versión '{VER}' para {T} de {1} a {2}",
		emote_version_approved: "Aprobó la versión '{VER}' de {T} para la lista pública",
		emote_version_restored: "Restauró la versión '{VER}' para {T}",
		emote_version_deleted: "Versión '{VER}' eliminada para {T}",
		emote_flag_added: "Añadió la propiedad {FLAG} a {T}",
		emote_flag_removed: "Removió la propiedad {FLAG} de {T}",
		user_created: "Creó {T}",
		user_deleted: "Eliminó {T}",
		user_editor_added: "Añadió a {U} como editor",
		user_editor_added_other: "Añadió {U1} como editor de {U2}",
		user_editor_updated: "Actualizó los privilegios de editor para {U}",
		user_editor_updated_other: "Se actualizaron los privilegios de editor para {U1}, un editor de {U2}",
		user_editor_removed: "Revocó los privilegios de editor de {U}",
		user_editor_removed_other: "Revocó los privilegios de editor de {U1} a {U2}",
		user_banned: "Vetó {T}",
		user_unbanned: "Removió el veto de {T}",
		user_updated: "Cambió las propiedades de {T}",
		user_sign_in: "{T} ha iniciado sesión",
		user_sign_out: "{T} ha cerrado sesión",
		user_forbidden: "A {T} se le negó el acceso a {0}",
		emote_set_created: "Creó {T}",
		emote_set_emote_added: "Añadió el emote {AE} a {T}",
		emote_set_emote_removed: "Removió el emote {AE} de {T}",
		emote_set_emote_renamed: "Renombró el emote {AE} de {O} a {N} en {T}",
		emote_set_updated: "Cambió las propiedades de {T}",
	},
	// Text that is relevant to emotes
	emote: {
		add: "Añadir Emote",
		author: "Añadido por",
		created_at: "Creado el",
		versions: "Versiones",
		preview_loading: "Cargando vistas previas... {'('}{0}{'/'}{1}{')'}",
		preview_failed: "Error al cargar las vistas previas",
		processing: "Procesando Emote - esto puede tomar algo de tiempo.",
		processing_failed: "Procesamiento fallido: {0}",
		use: "Usar emote",
		use_menu: "Añadir este emote a...",
		switch_version: "Cambiar a esta versión",
		in_n_sets: "en {0} conjunto | en {0} conjuntos",
		disable: "Desactivar Emote",
		properties: "Propiedades",
		new_version: "Nueva Versión",
		report: "Reportar emote",
		Privacy: "Privacidad",
		comments: "Comentarios",
		channels: "Canales",
		common_names: "Otros nombres para este emote",
		usage_stats: "Estadísticas del Emote",
		no_longer_available: "Este emote ya no está disponible",
		tags: "Etiquetas",
		add_tag: "Agregar Etiqueta",
		trending_rank: "#{0} en Tendencias",
		avif_no_support:
			"Lo sentimos, {BROWSER} no soporta el formato AVIF. Intente actualizar a una versión más reciente o intente con un navegador diferente.",
		delete_prompt: {
			heading: "Eliminar {0}",
			heading_versions: "Eliminar versión '{0}' de {1}",
			notice: "¿Está seguro que desea eliminar el emote {0}{'?'}",
			notice_versions: "¿Está seguro que desea eliminar la versión '{0}' de {1}{'?'}",
			reason: "Motivo de la eliminación",
		},
		properties_prompt: {
			heading: "Editar {0}",
		},
		unlisted: {
			heading: "¡Atención!",
			warning: "Este emote no está en la lista pública.",
			warning_flagged: "Este emote ha sido deslistado por las siguientes razones: {FLAG_LIST}",
			notice: "Puede ser agregado a tu canal, pero no podemos verificar que sea seguro mostrarlo en un directo.",
			notice_flagged: "Puede ser agregado a tu canal, pero creemos que no es seguro mostrarlo en un directo.",
			show_button: "Mostrar Emote",
			flag_sexual_content: "Contenido sexual o sugerentemente sexual",
			flag_epilepsy: "Luces parpadeantes / induce convulsiones",
			flag_edgy: "Edgy o de mal gusto",
			flag_twitch_banned: "No permitido en Twitch",
		},
		list: {
			searching: "Buscando",
			emote_count: "{0} emotes",
			no_emotes_listed: "No se encontraron emotes",
			fetching_slowly: "Lo sentimos, esto está tardando más de lo esperado",
			category: {
				name: "Categoría",
				top: "Principales",
				trending: "Populares",
				featured: "Destacado",
				global: "Globales",
				new: "Novedades",
			},
			filters: {
				case_sensitive: "Sensible a Mayúsculas",
				exact_match: "Coincidencia Exacta",
				ignore_tags: "Ignorar Etiquetas",
			},
		},
		upload: {
			emote_name: "Nombre del Emote",
			version_name: "Nombre de la versión",
			version_description: "Descripción de la versión",
			submit_emote: "Subir emote",
			create_emote_version: "Crear una versión del emote",
			image_upload: "Subir imagen",
			accepted_formats: "Formatos de archivo aceptados",
			filetype: "Archivo",
			animation: "Animación",
			transparency: "Transparencia",
			emote_details: "Detalles del emote",
			version_details: "Detalles de la versión",
			attribution: "Atribución",
			original_creator: "Creador original",
			as_child: "Estás creando una versión {IS_DIVERGED} de {0}.",
			content_moderation: "Moderación de contenido",
			half_transparency_tooltip:
				"Los píxeles solo pueden ser totalmente transparentes o totalmente opacos (sin transparencia variable)",
		},
	},
	emote_set: {
		create: "Nuevo @:common.object.emote_set",
		select: "Seleccionar @:common.object.emote_set",
		explain: {
			section: "¿Qué son los Conjuntos de Emotes?",
			hint: "Los conjuntos de emotes son una colección de emotes que pueden ser vinculados a tus canales o compartirse con otros usuarios.",
		},
		no_space: "Espacios de emotes llenos",
		none_selected: "Ningún conjunto seleccionado",
		editing: "Editando {0}",
		owner: "Conjunto de emotes de {USER}",
		owned: "Conjunto de emotes propios",
		label_renamed: "Renombrado",
		label_conflict: "Conflicto",
		label_default: "Predeterminado",
		label_actor: "Habilitado por {0}",
		// "enabled by <display_name of actor>"
		context_emote_add: "Añadir a {SET_NAME}",
		context_emote_remove: "Eliminar de {SET_NAME}",
		modal: {
			selected_channel_count: "ningún canal seleccionado | {0} canal seleccionado | {0} canales seleccionados",
			create_button: "Crear @:common.object.emote_set\n",
			rename_in_set: "Renombrar en {0}",
			context_rename: "Personalizar nombre del Emote",
			context_set_default: "Establecer como Predeterminado",
			context_unset_default: "Desasignar como Predeterminado",
		},
	},
	// Text that is relevant to users
	user: {
		emote_sets: "Conjuntos de Emotes",
		channel_emotes: "Emotes del Canal",
		joined_at: "Se unió el {0}",
		editors: "Editores",
		roles: "Roles",
		connections: "Canales | Canales y Cuentas",
		new_connections: "Vincular cuentas...",
		add_editor: "Agregar Editor",
		editor_modal_heading: "Modificar los Editores de {0}",
		editor_modal_user_search: "¿A quién te gustaría añadir como editor?",
		editor_modal_user_update: "Editor",
		no_channel_emotes: "{0} no tiene ningún emote en su canal de {1}",
		no_channels: "¡{0} no tiene canales conectados!",
		card: {
			view_full_profile: "Ver perfil completo",
		},
		settings: {
			button: "Editar perfil",
			section_profile: "Perfil",
			username: "Nombre de usuario",
			display_name: "Nombre Público",
			profile_picture: "Foto de perfil",
			section_badges: "Insignias",
			section_paints: "Pinturas",
			no_badges: "No tienes ningún emblema",
			no_paints: "No tienes ninguna pintura",
			sign_out: "Cerrar Sesión",
			cosmetics_updated: "Cosméticos Actualizados",
			cosmetics_updated_message: "Los cambios podrían tardar entre 10 y 30 minutos en aparecer en el chat.",
		},
		editor_permissions: {
			modify_emotes: "Modificar Emotes del Canal",
			use_private_emotes: "Usar Emotes Privados",
			manage_profile: "Gestionar Perfil",
			manage_owned_emotes: "Gestionar Emotes Propios",
			manage_emote_sets: "Administrar Conjuntos de Emotes",
			manage_billing: "Gestionar Facturación",
			manage_editors: "Gestionar Editores",
			view_messages: "Ver Mensajes",
		},
	},
	store: {
		subscribe_cta: "¡Conviértete en un Suscriptor de @:common.appName!",
		subscribed: "Gracias por suscribirte",
		button_self: "Suscríbete",
		button_gift: "Regalar una suscripción",
		billing_information_heading: "Detalles de facturación",
		payment_information_heading: "Información del pago",
		payment_gift_heading: "Seleccione el destinatario de este regalo",
		payment_methods: "Métodos de Pago",
		payment_methods_hint: "Elige un método de pago",
		payment_method_paypal: "PayPal",
		payment_method_stripe: "Tarjeta de Crédito",
		payment_popup_cta: "Completa la transacción en la nueva ventana",
		pay_button: "Paga a través de {0}",
		product_type_subscription: "Suscripción",
		purchase_success: {
			heading: "Compra realizada con éxito",
			text1: "Hemos recibido tu pago y tu suscripción ha sido activada.",
			text2: "¡Gracias por tu apoyo! Si tienes alguna pregunta, por favor contáctanos a través de los métodos proporcionados en esta página.",
		},
		sub: {
			incentive: "Obtendrás...",
			creator_tier: "Extras para creadores",
			creator_tier_desc: "Actualiza al nivel de Creador y consigue frescura extra para tu canal",
			feature_t1_badge: "Insignia de Suscriptor",
			feature_t1_paints: "Pinturas para tu Nombre de Usuario",
			feature_t1_animated_profile_picture: "Foto de Perfil Animada",
			feature_t1_zero_width: "Emotes de Cero Ancho",
			feature_t1_global_raffle: "Un Tíquet para votar en el sorteo del Emote Global",
			feature_t1_personal_emotes: "Emotes Personales",
			feature_t2_animated_profile_banner: "Animated Profile Banner",
			feature_t2_animated_offline_screen: "Animated Offline Screen",
			feature_t2_extended_sub_emotes: "Extended Sub Emotes",
			current_plan: "Tu plan",
			cancel: "No Renovar",
			update_payment: "Actualizar Método de Pago",
			reactivate: "Reactivar Suscripción",
			cancel_prompt: "¿Está seguro de que desea cancelar su suscripción?",
			state_heading: "Tu Suscripción",
			state_badge_progress: "Progreso de la Insignia",
			state_paints: "Pinturas",
			state_anniversary:
				"Tu Sub-aniversario es hoy | Tu próximo aniversario es en {0} día | Tu siguiente Sub-aniversario es en {0} días",
			state_age: "Te has suscrito hoy | Has estado suscrito por {0} día | Has estado suscrito por {0} días",
			state_ending: "Tu sub termina hoy | Tu sub termina en {0} día | Tu sub termina en {0} días",
			state_collection_heading: "Colección",
			state_paints_heading: "Pinturas Desbloqueadas ({0})",
			state_raffle: "Sorteo del Emote Global",
			state_leaderboards: "Top regaladores de Sub",
			raffle: {
				starts_at: "{0} días",
				starts_at_hint: "El siguiente sorteo de sub comienza en {0}",
			},
		},
	},
	// Text that is relating to the reporting system
	reporting: {
		report: "Reportar",
		emote_reason: {
			i_made_this: "Yo creé este emote, pero lo subió otra persona",
			duplicate: "Este emote es duplicado",
			pornographic: "Este emote contiene imágenes pornográficas o excesivamente sexualizadas",
			violence_gore: "Este emote muestra violencia extrema o gore",
			i_appear_there: "Este emote me representa y no me gusta",
			offensive: "Considero que este emote es ofensivo",
			other: "Otra razón",
		},
		uncategorized_prompt: "¿Cuál es el problema?",
		details: "Detalles (información adicional y/o evidencia para tu reporte)",
		success: "Reporte enviado correctamente",
		notify: "Serás notificado a través de un mensaje privado una vez que se gestione su reporte o se solicite información adicional.",
		complete_step_one: "Continuar",
		abuse_notice: "El abuso de la función de informe puede dar lugar a la revocación de su acceso.",
	},
	// Text that is relevant to the inbox
	inbox: {
		inbox: "Bandeja de entrada",
		tabs: {
			all: "Todos los mensajes",
			unread: "No leídos",
			important: "Importantes",
		},
		unread_tag: "Sin leer",
		// System inbox messages
		generic: {
			emote_listed: {
				subject: "Emote aprobado para publicarse",
				content: `
# Tu emote "{EMOTE_NAME}" fue aprobado para publicarse \n
Ahora estará disponible en el Directorio de emotes y aparecerá en @:common.appHost{'.'}
`,
			},
			emote_not_listed: {
				subject: "Emote no aprobado para publicarse",
				content: `
# Tu emote "{EMOTE_NAME}" fue rechazado
No estará disponible a través del Directorio público de emotes o visible en @:common.appHost,
pero seguirá disponible para los usuarios con el enlace.
`,
			},
			emote_ownership_claim_request: {
				subject: "Invitación para reclamar la propiedad de un emote",
				content: `
## {OWNER_DISPLAY_NAME} quiere que seas el propietario de '{EMOTE_NAME}'

[Ver Emote]({EMOTE_URL})

**[Aceptar Solicitud]({EMOTE_CLAIM_URL})** | [Rechazar Solicitud]({EMOTE_DECLINE_URL})
				`,
			},
			client_banned: {
				subject: "Tu cuenta ha sido bloqueada",
				reason: {
					pornographic_content: "",
				},
				content: `
# Cuenta bloqueada
Tu acceso a @:common.appName se ha limitado.<br/><br/>
### El motivo
{BAN_REASON} <br/><br/>
### Restricciones aplicadas<br/>
{EFFECT_NO_PERMISSIONS}
{EFFECT_NO_AUTH}
{EFFECT_NO_OWNERSHIP}
{EFFECT_MEMORY_HOLE}

<br/>Esta decisión expira el **{BAN_EXPIRE_AT}**.
_Si crees que esto ha sido un error, por favor envía un correo a @:common.supportEmail{'.'}_
`,
				effect: {
					no_permissions: "* Ya no puedes interactuar con la aplicación",
					no_auth: "* Ya no puedes iniciar sesión",
					no_ownership: "* Cualquier contenido que hayas creado ya no estará disponible",
					memory_hole: "* No serás visible para los demás usuarios",
					ip_blocked: "* Tu IP está bloqueada para acceder a todos los servicios de @:common.appName",
				},
			},
			report_closed: {
				subject: "Reporte cerrado",
				content: `
Gracias por notificarnos, su reporte {'#'}{CASE_ID} ha sido gestionado.
				`,
			},
		},
	},
	// 404 Messages
	notFound: {
		troll_despair: "No pudimos encontrarlo",
		doctor_wtf: "¿Qué demonios es esto?",
		pot_friend: "Soy un pot, friend",
	},
};
